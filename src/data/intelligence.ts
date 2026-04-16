export interface IntelligenceItem {
  id: number;
  title: string;
  time: string;
  tag: string;
  type: 'emerald' | 'purple';
  category: 'Shopify' | 'WooCommerce';
}

export const intelligenceData: IntelligenceItem[] = [
  // Shopify Data
  { id: 1, title: "Hydrogen 3.0: Is React Server Components the End of Liquid?", time: "2h ago", tag: "Plus", type: 'emerald', category: 'Shopify' },
  { id: 2, title: "Benchmarking Checkout Extensibility: 42% Higher Conversions?", time: "5h ago", tag: "Tech", type: 'emerald', category: 'Shopify' },
  { id: 3, title: "Shopify Markets Pro: The Landed Cost Reality Check", time: "1d ago", tag: "Global", type: 'emerald', category: 'Shopify' },
  { id: 4, title: "B2B on Shopify: The wholesale channel architecture review", time: "2d ago", tag: "Enterprise", type: 'emerald', category: 'Shopify' },
  { id: 5, title: "POS Go Audit: Hardware reliability in high-volume retail", time: "3d ago", tag: "Retail", type: 'emerald', category: 'Shopify' },
  { id: 6, title: "Functions API: Customizing the discount logic at scale", time: "4d ago", tag: "Dev", type: 'emerald', category: 'Shopify' },
  
  // WooCommerce Data
  { id: 7, title: "HPOS Performance: 30% faster checkout for enterprise stores?", time: "1h ago", tag: "Core", type: 'purple', category: 'WooCommerce' },
  { id: 8, title: "Blocks Checkout vs Classic: The mobile conversion gap", time: "4h ago", tag: "UX", type: 'purple', category: 'WooCommerce' },
  { id: 9, title: "Action Scheduler Audits: Debugging high-volume backgrounds", time: "1d ago", tag: "Dev", type: 'purple', category: 'WooCommerce' },
  { id: 10, title: "WooCommerce Payments: The actual cost of hidden fees", time: "2d ago", tag: "Fin", type: 'purple', category: 'WooCommerce' },
  { id: 11, title: "Database Architecture: Scaling to 1M+ active SKU records", time: "3d ago", tag: "Scale", type: 'purple', category: 'WooCommerce' },
  { id: 12, title: "REST API v4: Real-time inventory sync at scale", time: "5d ago", tag: "API", type: 'purple', category: 'WooCommerce' }
];
