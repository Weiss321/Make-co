// Seed data — embedded in the app for the standalone PWA build.
// Mirrors the .table files from the Zaro workspace version.

export const SEED_PRODUCTS = [
  { id: 1, name: "Cordyceps Glow Gummies", tagline: "Mushroom-powered focus chews", category: "Supplement", emoji: "🍄", description: "Adaptogenic gummies blending cordyceps, lion's mane, and B12 for sustained energy without the crash.", price: 32, cost: 8.5, preorder_target: 250, preorders: 187, status: "preorder", supplier_id: 2, manufacturer_id: 1, lead_time_days: 45, moq: 1000, margin_pct: 73, created_at: "2026-05-12", ai_generated: true },
  { id: 2, name: "Y2K Lemonade Can", tagline: "Summer vibes in 12oz", category: "Beverage", emoji: "🥤", description: "Sparkling pink lemonade with real yuzu and a Y2K-inspired holographic can.", price: 18, cost: 3.2, preorder_target: 300, preorders: 312, status: "production", supplier_id: 4, manufacturer_id: 3, lead_time_days: 60, moq: 2500, margin_pct: 82, created_at: "2026-04-02", ai_generated: true },
  { id: 3, name: "PDRN Brightening Serum", tagline: "K-beauty's best-kept secret", category: "Skin", emoji: "✨", description: "Salmon-derived PDRN serum that fades dark spots and boosts collagen in 4 weeks.", price: 68, cost: 14, preorder_target: 80, preorders: 64, status: "preorder", supplier_id: 1, manufacturer_id: 5, lead_time_days: 50, moq: 500, margin_pct: 79, created_at: "2026-05-28", ai_generated: true },
  { id: 4, name: "Magnesium Coffee", tagline: "Calm your nerves, keep the buzz", category: "Beverage", emoji: "☕", description: "Single-origin Ethiopian coffee infused with magnesium glycinate for a smoother caffeine ride.", price: 28, cost: 6.8, preorder_target: 150, preorders: 89, status: "preorder", supplier_id: 6, manufacturer_id: 4, lead_time_days: 35, moq: 800, margin_pct: 76, created_at: "2026-06-01", ai_generated: false },
  { id: 5, name: "Panda Streetwear Tee", tagline: "Attitude, oversized", category: "Apparel", emoji: "👕", description: "Heavyweight 280gsm cotton tee with a hand-drawn panda graphic. Drops in 3 colorways.", price: 48, cost: 11, preorder_target: 200, preorders: 245, status: "production", supplier_id: 7, manufacturer_id: 7, lead_time_days: 30, moq: 300, margin_pct: 77, created_at: "2026-03-18", ai_generated: true },
  { id: 6, name: "NAD+ Sleep Strips", tagline: "Trending on TikTok", category: "Wellness", emoji: "💫", description: "Dissolvable oral strips with NAD+, L-theanine, and melatonin for 7-hour deep sleep.", price: 42, cost: 9.5, preorder_target: 500, preorders: 503, status: "live", supplier_id: 2, manufacturer_id: 1, lead_time_days: 40, moq: 2000, margin_pct: 77, created_at: "2026-02-10", ai_generated: true },
  { id: 7, name: "Hot Honey Drizzle", tagline: "Sweet heat for everything", category: "Food", emoji: "🔥", description: "Wildflower honey infused with habanero and ghost pepper. Made in small Vermont batches.", price: 22, cost: 4.5, preorder_target: 80, preorders: 41, status: "preorder", supplier_id: 5, manufacturer_id: 6, lead_time_days: 25, moq: 200, margin_pct: 79, created_at: "2026-06-08", ai_generated: false },
  { id: 8, name: "Cordyceps Energy Drink", tagline: "Focus fuel for creatives", category: "Beverage", emoji: "⚡", description: "Zero-sugar functional energy drink with cordyceps, L-tyrosine, and Alpha-GPC.", price: 24, cost: 4.1, preorder_target: 300, preorders: 156, status: "preorder", supplier_id: 4, manufacturer_id: 3, lead_time_days: 55, moq: 3000, margin_pct: 83, created_at: "2026-05-20", ai_generated: true },
  { id: 9, name: "Peptide Moisturizer", tagline: "Plumped skin in 14 days", category: "Skin", emoji: "🧴", description: "Copper peptide + ceramide moisturizer that visibly firms and hydrates overnight.", price: 58, cost: 12.5, preorder_target: 100, preorders: 78, status: "preorder", supplier_id: 1, manufacturer_id: 5, lead_time_days: 50, moq: 600, margin_pct: 78, created_at: "2026-05-25", ai_generated: true },
  { id: 10, name: "Cherry Perfume Oil", tagline: "Maraschino + vanilla musk", category: "Fragrance", emoji: "🍒", description: "Rollerball perfume oil — gourmand cherry top notes settling into warm vanilla and amber.", price: 38, cost: 7.2, preorder_target: 150, preorders: 132, status: "preorder", supplier_id: 3, manufacturer_id: 5, lead_time_days: 40, moq: 500, margin_pct: 81, created_at: "2026-04-30", ai_generated: true },
  { id: 11, name: "Bone Broth Dog Treats", tagline: "Single-ingredient joy", category: "Pet", emoji: "🐶", description: "Freeze-dried beef bone broth bites. One ingredient, joint-supporting collagen.", price: 16, cost: 3.8, preorder_target: 180, preorders: 94, status: "preorder", supplier_id: 5, manufacturer_id: 6, lead_time_days: 30, moq: 400, margin_pct: 76, created_at: "2026-06-12", ai_generated: false },
  { id: 12, name: "Strawberry Lip Balm", tagline: "Glossy, tinted, addictive", category: "Beauty", emoji: "💋", description: "Tinted lip balm with shea butter and a hint of strawberry shortcake.", price: 14, cost: 2.4, preorder_target: 200, preorders: 218, status: "live", supplier_id: 1, manufacturer_id: 5, lead_time_days: 35, moq: 800, margin_pct: 83, created_at: "2026-01-22", ai_generated: true }
];

export const SEED_SUPPLIERS = [
  { id: 1, name: "Seoul Skin Labs", type: "both", country: "South Korea", city: "Seoul", specialties: "Skincare, Serums, Peptides, PDRN", certifications: "ISO 22716, CGMP, EWG Verified", rating: 4.9, min_order: 500, lead_time_days: 45, verified: true, active_projects: 7, contact_email: "partners@seoulskinlabs.kr", notes: "K-beauty contract manufacturer. Strong in cosmeceuticals." },
  { id: 2, name: "Vermont Gummy Co.", type: "manufacturer", country: "USA", city: "Burlington, VT", specialties: "Pectin gummies, Vitamins, Adaptogens", certifications: "FDA Registered, NSF, Organic", rating: 4.8, min_order: 1000, lead_time_days: 40, verified: true, active_projects: 12, contact_email: "intake@vtgummy.co", notes: "Specializes in vegan pectin formulations. Fast turnaround." },
  { id: 3, name: "Grasse Fragrance House", type: "both", country: "France", city: "Grasse", specialties: "Perfume oils, Eau de parfum, Custom accords", certifications: "IFRA Compliant, EU GMP", rating: 4.9, min_order: 500, lead_time_days: 50, verified: true, active_projects: 4, contact_email: "hello@grassefh.fr", notes: "Heritage perfumery. Premium custom scents." },
  { id: 4, name: "Pacific Beverage Co-Pack", type: "manufacturer", country: "USA", city: "Long Beach, CA", specialties: "Canned beverages, Functional drinks, Hot-fill", certifications: "SQF Level 3, FDA, Organic", rating: 4.7, min_order: 2500, lead_time_days: 60, verified: true, active_projects: 18, contact_email: "newbiz@pacificcopack.com", notes: "Largest functional beverage co-packer on the West Coast." },
  { id: 5, name: "Hudson Valley Foods", type: "manufacturer", country: "USA", city: "Hudson, NY", specialties: "Sauces, Honey, Pet treats, Small-batch food", certifications: "FDA Registered, Kosher, Non-GMO", rating: 4.6, min_order: 200, lead_time_days: 30, verified: true, active_projects: 9, contact_email: "partners@hvfoods.com", notes: "Tiny MOQs. Perfect for first-time food founders." },
  { id: 6, name: "Andean Coffee Cooperative", type: "supplier", country: "Colombia", city: "Medellín", specialties: "Green coffee, Roasted beans, Single-origin", certifications: "Fair Trade, Rainforest Alliance, Organic", rating: 4.8, min_order: 100, lead_time_days: 25, verified: true, active_projects: 6, contact_email: "trade@andeancoop.co", notes: "Direct-trade with 200+ smallholder farmers." },
  { id: 7, name: "Lisbon Textile Works", type: "manufacturer", country: "Portugal", city: "Porto", specialties: "Heavyweight cotton, Embroidery, DTG print", certifications: "GOTS, Oeko-Tex, Fair Wear", rating: 4.7, min_order: 300, lead_time_days: 30, verified: true, active_projects: 11, contact_email: "studio@lisbontw.pt", notes: "Premium streetwear-grade tees and hoodies." },
  { id: 8, name: "Bangkok Beauty Source", type: "supplier", country: "Thailand", city: "Bangkok", specialties: "Cosmetic ingredients, Botanicals, Packaging", certifications: "ISO 9001, ECOCERT", rating: 4.5, min_order: 50, lead_time_days: 35, verified: true, active_projects: 3, contact_email: "sourcing@bkkbeauty.th", notes: "Boutique ingredient broker. Great for sampling." },
  { id: 9, name: "Shenzhen Pack Studio", type: "supplier", country: "China", city: "Shenzhen", specialties: "Custom packaging, Glass, Aluminum, Print", certifications: "FSC, ISO 14001", rating: 4.6, min_order: 1000, lead_time_days: 35, verified: true, active_projects: 22, contact_email: "sales@szpack.cn", notes: "Full-service packaging — bottles, cans, cartons, labels." },
  { id: 10, name: "Tuscan Olive Estate", type: "supplier", country: "Italy", city: "Florence", specialties: "Olive oil, Vinegars, Herb infusions", certifications: "DOP, Organic, Slow Food", rating: 4.9, min_order: 50, lead_time_days: 20, verified: true, active_projects: 2, contact_email: "ciao@tuscanolive.it", notes: "Family-run estate, 4th generation." }
];

export const SEED_ORDERS = [
  { id: 1, product_id: 1, customer_name: "Maya Chen", customer_email: "maya@example.com", type: "preorder", quantity: 2, total: 64, status: "in_escrow", created_at: "2026-06-15", ship_to: "Brooklyn, NY" },
  { id: 2, product_id: 6, customer_name: "Jordan Park", customer_email: "jordan@example.com", type: "sale", quantity: 1, total: 42, status: "fulfilled", created_at: "2026-06-16", ship_to: "Austin, TX" },
  { id: 3, product_id: 2, customer_name: "Riley Smith", customer_email: "riley@example.com", type: "preorder", quantity: 4, total: 72, status: "confirmed", created_at: "2026-06-14", ship_to: "Los Angeles, CA" },
  { id: 4, product_id: 12, customer_name: "Sofia Rivera", customer_email: "sofia@example.com", type: "sale", quantity: 3, total: 42, status: "fulfilled", created_at: "2026-06-17", ship_to: "Miami, FL" },
  { id: 5, product_id: 5, customer_name: "Alex Wong", customer_email: "alex@example.com", type: "preorder", quantity: 1, total: 48, status: "confirmed", created_at: "2026-06-13", ship_to: "Seattle, WA" },
  { id: 6, product_id: 10, customer_name: "Tara Davis", customer_email: "tara@example.com", type: "preorder", quantity: 2, total: 76, status: "in_escrow", created_at: "2026-06-18", ship_to: "Chicago, IL" },
  { id: 7, product_id: 3, customer_name: "Devon Lee", customer_email: "devon@example.com", type: "preorder", quantity: 1, total: 68, status: "in_escrow", created_at: "2026-06-12", ship_to: "Denver, CO" },
  { id: 8, product_id: 6, customer_name: "Cameron Singh", customer_email: "cameron@example.com", type: "sale", quantity: 2, total: 84, status: "fulfilled", created_at: "2026-06-18", ship_to: "Portland, OR" },
  { id: 9, product_id: 8, customer_name: "Harper Kim", customer_email: "harper@example.com", type: "preorder", quantity: 6, total: 144, status: "in_escrow", created_at: "2026-06-16", ship_to: "Boston, MA" },
  { id: 10, product_id: 12, customer_name: "Quinn Patel", customer_email: "quinn@example.com", type: "sale", quantity: 2, total: 28, status: "pending", created_at: "2026-06-19", ship_to: "San Diego, CA" }
];

export const SEED_SOURCING = [
  { id: 1, product_name: "Cordyceps Glow Gummies", category: "Supplement", ingredient_or_material: "Organic cordyceps militaris extract 10:1", target_cost: 38, quantity_needed: 50, region_preference: "Asia", certifications_required: "USDA Organic, Non-GMO", status: "matched", matched_supplier_id: 8, created_at: "2026-05-08", notes: "Need clean lab reports for heavy metals." },
  { id: 2, product_name: "Y2K Lemonade Can", category: "Beverage", ingredient_or_material: "Holographic aluminum cans, 12oz sleek", target_cost: 0.18, quantity_needed: 25000, region_preference: "China", certifications_required: "FDA food contact", status: "quoted", matched_supplier_id: 9, created_at: "2026-05-22", notes: "3 quotes received, awaiting samples." },
  { id: 3, product_name: "PDRN Brightening Serum", category: "Skin", ingredient_or_material: "Salmon-derived PDRN powder, pharma grade", target_cost: 1200, quantity_needed: 5, region_preference: "South Korea", certifications_required: "KFDA, COA", status: "matched", matched_supplier_id: 1, created_at: "2026-05-18", notes: "Direct from Seoul Skin Labs." },
  { id: 4, product_name: "Magnesium Coffee", category: "Beverage", ingredient_or_material: "Single-origin Ethiopia Yirgacheffe green beans", target_cost: 8.5, quantity_needed: 200, region_preference: "Latin America or Africa", certifications_required: "Fair Trade, Organic", status: "sourcing", matched_supplier_id: null, created_at: "2026-06-02", notes: "Looking for Q1 2027 harvest." },
  { id: 5, product_name: "Hot Honey Drizzle", category: "Food", ingredient_or_material: "Wildflower honey, raw, unfiltered", target_cost: 6.5, quantity_needed: 300, region_preference: "USA", certifications_required: "True Source Certified", status: "matched", matched_supplier_id: 5, created_at: "2026-06-09", notes: "Vermont sourcing preferred." },
  { id: 6, product_name: "Cherry Perfume Oil", category: "Fragrance", ingredient_or_material: "Maraschino cherry accord, natural", target_cost: 280, quantity_needed: 10, region_preference: "France", certifications_required: "IFRA", status: "matched", matched_supplier_id: 3, created_at: "2026-05-04", notes: "Custom blend in development." },
  { id: 7, product_name: "Bone Broth Dog Treats", category: "Pet", ingredient_or_material: "Grass-fed beef bone broth concentrate", target_cost: 14, quantity_needed: 80, region_preference: "USA", certifications_required: "USDA, Animal Welfare Approved", status: "sourcing", matched_supplier_id: null, created_at: "2026-06-14", notes: "Need pet-grade certifications." },
  { id: 8, product_name: "Peptide Moisturizer", category: "Skin", ingredient_or_material: "GHK-Cu copper peptide complex", target_cost: 850, quantity_needed: 3, region_preference: "South Korea", certifications_required: "Cosmetic grade COA", status: "matched", matched_supplier_id: 1, created_at: "2026-05-26", notes: "Stability tested formula." },
  { id: 9, product_name: "Panda Streetwear Tee", category: "Apparel", ingredient_or_material: "280gsm GOTS organic cotton, garment dyed", target_cost: 4.2, quantity_needed: 600, region_preference: "Portugal or Turkey", certifications_required: "GOTS, Oeko-Tex", status: "matched", matched_supplier_id: 7, created_at: "2026-03-22", notes: "3 colorways: cream, sage, charcoal." },
  { id: 10, product_name: "NAD+ Sleep Strips", category: "Wellness", ingredient_or_material: "Pullulan film base, dissolvable", target_cost: 22, quantity_needed: 40, region_preference: "USA or Japan", certifications_required: "FDA GRAS", status: "open", matched_supplier_id: null, created_at: "2026-06-17", notes: "Need 30-day dissolve testing." }
];

// ---- Local persistent store (localStorage) ----
const KEYS = { products: 'mco_products', suppliers: 'mco_suppliers', orders: 'mco_orders', sourcing: 'mco_sourcing' };

export function loadStore() {
  const get = (k, fallback) => {
    try {
      const raw = localStorage.getItem(k);
      return raw ? JSON.parse(raw) : fallback;
    } catch { return fallback; }
  };
  return {
    products: get(KEYS.products, SEED_PRODUCTS),
    suppliers: get(KEYS.suppliers, SEED_SUPPLIERS),
    orders: get(KEYS.orders, SEED_ORDERS),
    sourcing: get(KEYS.sourcing, SEED_SOURCING)
  };
}

export function saveStore(part) {
  Object.entries(part).forEach(([k, v]) => {
    if (KEYS[k]) localStorage.setItem(KEYS[k], JSON.stringify(v));
  });
}

export function resetStore() {
  Object.values(KEYS).forEach(k => localStorage.removeItem(k));
}
