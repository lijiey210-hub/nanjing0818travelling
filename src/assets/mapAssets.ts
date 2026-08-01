import day1Map from './images/nanjing_day1_map_1785579700439.jpg';
import day2Map from './images/nanjing_day2_map_1785579726131.jpg';
import day3Map from './images/nanjing_day3_map_1785579741588.jpg';
import day4Map from './images/nanjing_day4_map_1785580884426.jpg';
import reservationMap from './images/nanjing_reservation_map_1785579755654.jpg';
import subwayMap from './images/nanjing_subway_map_1785579769493.jpg';
import walkingTaxiMap from './images/nanjing_walking_taxi_map_1785579790058.jpg';
import scheduleInfographic from './images/nanjing_4day_schedule_infographic_1785579823580.jpg';

export const MAP_IMAGES = {
  day1: day1Map,
  day2: day2Map,
  day3: day3Map,
  day4: day4Map,
  reservation: reservationMap,
  subway: subwayMap,
  walkingTaxi: walkingTaxiMap,
  schedule: scheduleInfographic,
};

export interface MapImageItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'daily' | 'overall';
  dayNumber?: number;
  imageUrl: string;
  description: string;
  tags: string[];
}

export const MAP_GALLERY_ITEMS: MapImageItem[] = [
  {
    id: 'day1-map',
    title: '南京第一天行程地图',
    subtitle: '六朝古都 · 湖光城影 · 烟火人间',
    category: 'daily',
    dayNumber: 1,
    imageUrl: day1Map,
    description: '涵盖玄武湖附近酒店入住、湖南路狮子桥、鸡鸣寺、台城城墙日落与玄武湖夜骑线路',
    tags: ['DAY 1', '玄武湖', '鸡鸣寺', '城墙日落']
  },
  {
    id: 'day2-map',
    title: '南京第二天行程地图',
    subtitle: '钟山名胜 · 民国风韵 · 今昔交融',
    category: 'daily',
    dayNumber: 2,
    imageUrl: day2Map,
    description: '涵盖钟山风景区全景线路：明孝陵、美龄宫、音乐台、中山陵、灵谷寺与新街口夜游',
    tags: ['DAY 2', '钟山风景区', '明孝陵', '中山陵']
  },
  {
    id: 'day3-map',
    title: '南京第三天行程地图',
    subtitle: '民国记忆 · 城市漫步 · 秦淮夜游',
    category: 'daily',
    dayNumber: 3,
    imageUrl: day3Map,
    description: '涵盖总统府、科巷午餐、六朝博物馆、1912街区、颐和路City Walk与夫子庙十里秦淮夜游',
    tags: ['DAY 3', '总统府', '颐和路', '夫子庙夜游']
  },
  {
    id: 'day4-map',
    title: '南京第四天行程地图',
    subtitle: '金陵文脉 · 城墙遗韵 · 最后体验',
    category: 'daily',
    dayNumber: 4,
    imageUrl: day4Map,
    description: '涵盖南京博物院参观、中华门城堡登城墙、老门东传统街区漫步与新街口/德基广场选购伴手礼返程',
    tags: ['DAY 4', '南京博物院', '中华门城堡', '老门东', '新街口伴手礼']
  },
  {
    id: 'schedule-infographic',
    title: '南京四日旅行时间表全景长图',
    subtitle: '民国风 · 慢游金陵四日主干时间轴',
    category: 'overall',
    imageUrl: scheduleInfographic,
    description: '精美复古排版，一图看清四天18日—21日主干行程时间节点、住宿区域分布与核心关键词',
    tags: ['4日全景', '时间轴长图', '行程规划']
  },
  {
    id: 'reservation-map',
    title: '景点门票与提前预约天数分布图',
    subtitle: '提前3天 / 提前7天 官方公众号预约指南',
    category: 'overall',
    imageUrl: reservationMap,
    description: '标明中山陵、南京博物院、红山动物园、总统府等热门景点的预约提前天数与门票价格',
    tags: ['预约攻略', '门票大全', '行前必备']
  },
  {
    id: 'subway-map',
    title: '南京地铁交通路线枢纽示意图',
    subtitle: '南京站、南京南站与地铁1/2/3/4号线',
    category: 'overall',
    imageUrl: subwayMap,
    description: '清晰标注地铁几分钟直达各核心景点，包含住宿区域选址建议与交通指南',
    tags: ['地铁交通', '1/2/3/4号线', '高效换乘']
  },
  {
    id: 'walking-taxi-map',
    title: '景点间距离与步行打车耗时连线图',
    subtitle: '景点连线打卡与耗时标注',
    category: 'overall',
    imageUrl: walkingTaxiMap,
    description: '手绘标注景点间的步行分钟数、打车耗时与最顺路打卡接驳线路',
    tags: ['打车耗时', '步行连线', '游玩动线']
  }
];
