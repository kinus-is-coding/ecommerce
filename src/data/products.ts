export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Mechanical Keyboard G613",
    price: 1290000,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80",
    description: "Bàn phím cơ không dây tốc độ cao, switch cực nhạy phù hợp cho cả chơi game và làm việc văn phòng.",
    category: "Gear"
  },
  {
    id: 2,
    name: "Wireless Mouse Master 3S",
    price: 2450000,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    description: "Chuột không dây công thái học, giúp giảm mỏi tay khi làm việc lâu và có con lăn siêu nhanh.",
    category: "Gear"
  },
  {
    id: 3,
    name: "Gaming Monitor 27 inch",
    price: 5900000,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    description: "Màn hình 144Hz, tấm nền IPS cho màu sắc rực rỡ và góc nhìn rộng.",
    category: "Monitor"
  },
  {
    id: 4,
    name: "Noise Cancelling Headphones",
    price: 3200000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "Tai nghe chống ồn chủ động, âm thanh chất lượng cao, pin dùng liên tục 30 giờ.",
    category: "Audio"
  }
];
export const getProductById = (id: string | undefined) => {
  if (!id) return undefined; 
  
  return productsData.find((p) => p.id === Number(id));
}