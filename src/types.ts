export type CategoryType = 'spot' | 'food' | 'transport' | 'leisure' | 'shopping';

export interface TimelineItem {
  id: string;
  time: string;
  location: string;
  title: string;
  experienceHighlight: string;
  note?: string;
  category: CategoryType;
  coordinates: { x: number; y: number }; // percentage on map
  photographySpot?: boolean;
  reservationRequired?: boolean;
  tips?: string[];
  recommendedDuration?: string;
  subwayStation?: string;
}

export interface TransportAdvice {
  method: string;
  details: string;
  iconName: string;
}

export interface ItineraryDay {
  dayNumber: number;
  date: string; // e.g., "18日"
  fullDate: string; // e.g., "8月18日（第一天）"
  title: string; // e.g., "初识南京"
  subtitle: string; // e.g., "六朝古都 · 湖光城影 · 烟火人间"
  themeKeywords: string[];
  summary: string;
  mapImageSrc?: string;
  timeline: TimelineItem[];
  transportAdvice: TransportAdvice[];
  tips: string[];
  foodRecommendations: string[];
}

export interface Landmark {
  id: string;
  name: string;
  dayNumber: number;
  category: '民国建筑' | '古迹遗址' | '文博展馆' | '自然风光' | '夜景漫步';
  description: string;
  highlight: string;
  address: string;
  bestTime: string;
  ticketInfo: string;
  recommendedHours: string;
  photoTip: string;
  imageUrl: string;
  tags: string[];
}

export interface FoodItem {
  id: string;
  name: string;
  chineseName: string;
  category: '特色主食' | '街头小吃' | '传统糕点' | '夜市美食';
  priceRange: string;
  mustTrySpot: string;
  description: string;
  tasteProfile: string;
  imageUrl: string;
  tags: string[];
}

export interface SouvenirItem {
  id: string;
  name: string;
  category: '非遗文化' | '名特产品' | '特色纪念';
  description: string;
  priceRange: string;
  bestBuyingLocations: string[];
  imageUrl: string;
  recommendationRating: number; // 1-5
}

export interface ExpenseItem {
  id: string;
  category: '住宿' | '门票' | '餐饮' | '交通' | '购物伴手礼';
  name: string;
  amount: number;
  perPerson: boolean;
}
