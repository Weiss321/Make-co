// AI product generator.
// If VITE_OPENAI_API_KEY is set at build time, uses OpenAI for real generation.
// Otherwise falls back to a deterministic local template (still useful + demo-friendly).

const CATEGORY_EMOJI = {
  Beverage: '🥤', Supplement: '💊', Skin: '✨', Beauty: '💋',
  Food: '🍯', Fragrance: '🌸', Pet: '🐶', Apparel: '👕', Wellness: '💫'
};

const ADJECTIVES = ['Cosmic', 'Velvet', 'Hyper', 'Glow', 'Aurora', 'Solstice', 'Honey', 'Wild', 'Lunar', 'Bloom', 'Nova', 'Drift', 'Halo', 'Dusk', 'Ember'];
const NOUNS_BY_CAT = {
  Supplement: ['Boost', 'Stack', 'Chews', 'Caps', 'Pods'],
  Beverage: ['Fizz', 'Brew', 'Sip', 'Pop', 'Tonic'],
  Skin: ['Serum', 'Glow', 'Drops', 'Elixir', 'Veil'],
  Beauty: ['Tint', 'Balm', 'Stain', 'Gloss', 'Kiss'],
  Food: ['Drizzle', 'Crunch', 'Bites', 'Spread', 'Snack'],
  Fragrance: ['Mist', 'Oil', 'Eau', 'Aura', 'Cloud'],
  Pet: ['Bites', 'Chews', 'Treats', 'Crunch', 'Bowl'],
  Apparel: ['Tee', 'Hoodie', 'Crew', 'Cap', 'Sock'],
  Wellness: ['Strip', 'Patch', 'Ritual', 'Stack', 'Drops']
};

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function localGenerate(idea, category) {
  const noun = pick(NOUNS_BY_CAT[category] || ['Drop']);
  const adj = pick(ADJECTIVES);
  const name = `${adj} ${noun}`;
  const taglines = [
    `${idea.split(/[,.]/)[0]}, reimagined`,
    `For the next generation of ${category.toLowerCase()} lovers`,
    `Small batch. Big impact.`,
    `Built for the obsessed.`,
    `Your new daily ritual.`
  ];
  const price = rand(18, 68);
  const cost = +(price * (rand(15, 28) / 100)).toFixed(2);
  const margin_pct = Math.round(((price - cost) / price) * 100);
  return {
    name,
    tagline: pick(taglines),
    description: `${idea.charAt(0).toUpperCase() + idea.slice(1)}. Designed in collaboration with our network of vetted ${category.toLowerCase()} manufacturers, every batch is tested for purity and consistency before it ships.`,
    price,
    cost,
    preorder_target: rand(50, 400),
    moq: rand(200, 2500),
    lead_time_days: rand(28, 55),
    margin_pct,
    emoji: CATEGORY_EMOJI[category] || '✨'
  };
}

export async function generateProduct(idea, category) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) {
    // Tiny delay to feel like a real generation
    await new Promise(r => setTimeout(r, 600));
    return localGenerate(idea, category);
  }

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'system',
            content: 'You are a consumer product designer for an AI brand studio called make.co. Generate concise, marketable product specs as strict JSON.'
          },
          {
            role: 'user',
            content: `Generate a product spec from the idea below.

Idea: "${idea}"
Category: ${category}

Return JSON with these exact fields:
{
  "name": "catchy product name (2-4 words)",
  "tagline": "short hook, max 8 words",
  "description": "2 short sentences, ~30 words total",
  "price": integer USD 12-80,
  "cost": decimal USD 2-15,
  "preorder_target": integer 50-500,
  "moq": integer 200-3000,
  "lead_time_days": integer 25-60,
  "margin_pct": integer 70-85,
  "emoji": "single emoji"
}`
          }
        ],
        temperature: 0.85
      })
    });
    if (!res.ok) throw new Error('OpenAI request failed');
    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || '{}';
    const parsed = JSON.parse(content);
    return {
      name: parsed.name || 'Untitled product',
      tagline: parsed.tagline || '',
      description: parsed.description || '',
      price: Number(parsed.price) || 0,
      cost: Number(parsed.cost) || 0,
      preorder_target: Number(parsed.preorder_target) || 100,
      moq: Number(parsed.moq) || 500,
      lead_time_days: Number(parsed.lead_time_days) || 40,
      margin_pct: Number(parsed.margin_pct) || 75,
      emoji: parsed.emoji || CATEGORY_EMOJI[category] || '✨'
    };
  } catch (e) {
    console.warn('OpenAI failed, using local generator:', e);
    return localGenerate(idea, category);
  }
}
