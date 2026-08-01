import { ItineraryDay, Landmark, FoodItem, SouvenirItem, ExpenseItem } from '../types';

import mingXiaolingImg from '../assets/images/lm_ming_xiaoling_1785580214519.jpg';
import zongtongfuImg from '../assets/images/lm_zongtongfu_1785580227282.jpg';
import nanjingMuseumImg from '../assets/images/lm_nanjing_museum_1785580241274.jpg';
import meilingPalaceImg from '../assets/images/lm_meiling_palace_1785580258161.jpg';
import jimingTempleImg from '../assets/images/lm_jiming_temple_1785580272479.jpg';
import qinhuaiRiverImg from '../assets/images/lm_qinhuai_river_1785580283248.jpg';
import yiheRoadImg from '../assets/images/lm_yihe_road_1785580302094.jpg';
import zhonghuamenImg from '../assets/images/lm_zhonghuamen_1785580316378.jpg';

import yansuidyaImg from '../assets/images/food_yansuidya_1785580335791.jpg';
import yaxuefensiImg from '../assets/images/food_yaxuefensi_1785580348601.jpg';
import niurouguotieImg from '../assets/images/food_niurouguotie_1785580361692.jpg';
import pidumianImg from '../assets/images/food_pidumian_1785580380226.jpg';
import tangyumiaoImg from '../assets/images/food_tangyumiao_1785580392013.jpg';
import tangbaoShaobingImg from '../assets/images/food_tangbao_shaobing_1785580402733.jpg';

import yunjinImg from '../assets/images/souv_yunjin_1785580420223.jpg';
import yuhuashiImg from '../assets/images/souv_yuhuashi_1785580432148.jpg';
import duckGiftImg from '../assets/images/souv_duck_gift_1785580445362.jpg';
import pastryGiftImg from '../assets/images/souv_pastry_gift_1785580462302.jpg';

export const ITINERARY_DAYS: ItineraryDay[] = [
  {
    dayNumber: 1,
    date: '18日',
    fullDate: '8月18日（第一天）',
    title: '初识南京',
    subtitle: '调整顺序 · 告别折返 · 鸡鸣古刹 · 台城日落 · 夜骑玄武湖',
    themeKeywords: ['鸡鸣寺', '台城城墙日落', '玄武湖夜骑', '狮子桥/湖南路宵夜'],
    summary: '第一天抵达南京，调整顺序告别折返。14:00入住玄武湖附近酒店稍作休息，15:00参访古刹鸡鸣寺慢品古建，17:00登上台城明城墙看日落与古今交融，18:30开始玄武湖夜骑散步，20:00后前往湖南路/狮子桥享用晚餐与宵夜。',
    timeline: [
      {
        id: 'd1-1',
        time: '14:00',
        location: '玄武湖附近酒店',
        title: '抵达南京，入住酒店稍作休息',
        experienceHighlight: '休息调整状态，放置行李，蓄力后半程',
        note: '入住玄武湖附近酒店极近，建议保持轻松体能',
        category: 'leisure',
        coordinates: { x: 45, y: 18 },
        recommendedDuration: '1小时',
        tips: ['推荐选择玄武门或鸡鸣寺附近的酒店，交通和景观极佳']
      },
      {
        id: 'd1-2',
        time: '15:00-17:00',
        location: '古刹鸡鸣寺',
        title: '参访古刹鸡鸣寺（慢品古刹）',
        experienceHighlight: '从玄武湖过去极近，15:00入寺时间充裕，慢品千年古刹香火与古建',
        note: '六朝第一佳丽地，南朝四百八十寺首刹',
        category: 'spot',
        coordinates: { x: 68, y: 40 },
        photographySpot: true,
        recommendedDuration: '2小时',
        subwayStation: '鸡鸣寺站（3号线/4号线）',
        tips: ['可登药师佛塔俯瞰玄武湖，光线舒适适合拍照打卡']
      },
      {
        id: 'd1-3',
        time: '17:00-18:30',
        location: '台城明城墙',
        title: '登台城明城墙看日落（古今交融）',
        experienceHighlight: '从鸡鸣寺后门直接登上台城明城墙，衔接日落体验，俯瞰玄武湖与紫峰大厦古今同框',
        note: '600年明代城砖，金陵代表性落日视线',
        category: 'spot',
        coordinates: { x: 75, y: 52 },
        photographySpot: true,
        recommendedDuration: '1.5小时',
        tips: ['日落余晖映照玄武湖水面与紫峰大厦，拍照效果震撼']
      },
      {
        id: 'd1-4',
        time: '18:30-20:00',
        location: '玄武湖景区',
        title: '玄武湖环湖夜骑 / 散步',
        experienceHighlight: '下了城墙即是玄武湖，正适合开始环湖夜骑/散步，吹湖风观夜景',
        note: '湖面倒映城市霓虹，感受清爽夜风',
        category: 'leisure',
        coordinates: { x: 55, y: 70 },
        recommendedDuration: '1.5小时',
        tips: ['可租用共享单车或园区观光车，环湖游览极其舒适']
      },
      {
        id: 'd1-5',
        time: '20:00 以后',
        location: '湖南路 / 狮子桥小吃街',
        title: '湖南路与狮子桥晚餐宵夜',
        experienceHighlight: '小吃街和盐水鸭店烟火气最旺，吃完直接步行回附近酒店休息',
        note: '享用金陵盐水鸭、鸭血粉丝汤、小笼包与特色宵夜',
        category: 'food',
        coordinates: { x: 38, y: 80 },
        recommendedDuration: '1.5小时',
        tips: ['推荐尝试韩复兴盐水鸭或回味鸭血粉丝汤，吃饱后步行回酒店']
      }
    ],
    transportAdvice: [
      { method: '步行', details: '第一天景点顺线连贯，鸡鸣寺后门可直接上台城城墙，城墙下即玄武湖，完全不折返。', iconName: 'Footprints' },
      { method: '骑行', details: '下了城墙直接在玄武湖开启夜骑散步，骑行至湖南路狮子桥极方便。', iconName: 'Bike' },
      { method: '返回', details: '湖南路狮子桥离玄武湖附近酒店仅数百米，晚餐后散步轻松返回。', iconName: 'Navigation' }
    ],
    tips: [
      '从鸡鸣寺后门可直接上台城城墙，省去多余步程与折返',
      '台城城墙日落约在17:30-18:00，刚好衔接日落美景',
      '20:00后的湖南路/狮子桥宵夜档最有市井烟火气',
      '晚餐推荐尝鲜：金陵盐水鸭、鸭血粉丝汤、桂花糖芋苗、小笼包'
    ],
    foodRecommendations: ['金陵盐水鸭', '鸭血粉丝汤', '南京小笼包', '桂花糖芋苗']
  },
  {
    dayNumber: 2,
    date: '19日',
    fullDate: '8月19日（第二天）',
    title: '钟山风景区',
    subtitle: '顺线游览 · 明孝陵 · 美龄宫 · 中山陵登顶 · 音乐台收尾',
    themeKeywords: ['明孝陵石象路', '美龄宫项链', '中山陵登顶', '音乐台白鸽', '德基广场'],
    summary: '第二天游览钟山风景区，顺线安排游览路线：从明孝陵石象路进，出5号门看美龄宫，午餐后攀登中山陵392级台阶完成核心打卡，随后在旁边的音乐台坐下喂鸽子休闲恢复体力，晚间返回市区前往德基广场。',
    timeline: [
      {
        id: 'd2-1',
        time: '08:00',
        location: '市区酒店/钟山',
        title: '早餐后前往钟山风景区',
        experienceHighlight: '开启钟山核心路线，晨光下的梧桐大道',
        category: 'transport',
        coordinates: { x: 20, y: 15 },
        subwayStation: '苜蓿园站（2号线）',
        tips: ['乘地铁2号线至苜蓿园站1号口出即达']
      },
      {
        id: 'd2-2',
        time: '08:30-11:30',
        location: '明孝陵景区',
        title: '游览明孝陵（石象路、明楼）',
        experienceHighlight: '从地铁苜蓿园站进，主打石象路与享殿明楼，体验明代皇陵宏大规制',
        note: '明太祖朱元璋陵寝，“南京最美神道石象路”',
        category: 'spot',
        coordinates: { x: 62, y: 22 },
        photographySpot: true,
        reservationRequired: true,
        recommendedDuration: '3小时',
        tips: ['石象路兽雕精美，拍照极具韵味']
      },
      {
        id: 'd2-3',
        time: '11:30-12:30',
        location: '美龄宫',
        title: '参观美龄宫（梧桐绿宝石项链）',
        experienceHighlight: '出明孝陵5号门跨过陵园路即到，欣赏民国顶尖建筑美学与梧桐项链吊坠',
        note: '宋美龄旧居，古典与西式相结合',
        category: 'spot',
        coordinates: { x: 48, y: 42 },
        photographySpot: true,
        recommendedDuration: '1小时',
        tips: ['美龄宫离明孝陵5号门极近，跨过陵园路即达']
      },
      {
        id: 'd2-4',
        time: '12:30-13:30',
        location: '中山陵商业广场/美龄宫附近',
        title: '午餐休息',
        experienceHighlight: '可在美龄宫附近或乘坐景区观光车前往中山陵商业广场享用简餐',
        category: 'food',
        coordinates: { x: 50, y: 52 },
        recommendedDuration: '1小时'
      },
      {
        id: 'd2-5',
        time: '13:30-15:30',
        location: '中山陵',
        title: '登顶中山陵（博爱坊与祭堂）',
        experienceHighlight: '一口气爬完392级台阶登顶，俯瞰金陵大地，完成核心打卡',
        note: '孙中山先生陵寝，象征博爱与天下为公',
        category: 'spot',
        coordinates: { x: 72, y: 72 },
        reservationRequired: true,
        recommendedDuration: '2小时',
        tips: ['必须提前在微信公众号实名预约中山陵门票！']
      },
      {
        id: 'd2-6',
        time: '15:30-16:30',
        location: '音乐台',
        title: '音乐台喂鸽听音乐（体力恢复期）',
        experienceHighlight: '下山后直接步入旁边的音乐台。体能消耗差不多时，刚好坐下来喂鸽子、听音乐，完美恢复体力',
        note: '树影斑驳、白鸽翱翔，浪漫休闲',
        category: 'leisure',
        coordinates: { x: 42, y: 62 },
        photographySpot: true,
        recommendedDuration: '1小时',
        tips: ['现场可买鸽食喂鸽子，看鸽群腾空飞行景象']
      },
      {
        id: 'd2-7',
        time: '16:30-17:30',
        location: '灵谷寺（可选）',
        title: '游览灵谷寺（视体力决定）',
        experienceHighlight: '根据体力和时间决定，如果累了可直接坐观光车下山',
        note: '千古无梁殿与灵谷塔',
        category: 'spot',
        coordinates: { x: 82, y: 80 },
        recommendedDuration: '1小时'
      },
      {
        id: 'd2-8',
        time: '18:30',
        location: '新街口 · 德基广场',
        title: '返回市区，新街口·德基广场购物晚餐',
        experienceHighlight: '前往新街口享用晚餐，打卡德基广场与主题艺术洗手间',
        category: 'shopping',
        coordinates: { x: 48, y: 96 },
        subwayStation: '新街口站（1/2号线）',
        tips: ['德基广场8F/18F艺术洗手间十分具有代表性']
      }
    ],
    transportAdvice: [
      { method: '地铁', details: '地铁2号线苜蓿园站下车，从1号口出站直接进入陵园路。', iconName: 'Train' },
      { method: '景区观光车', details: '美龄宫至中山陵商业广场、中山陵至音乐台均有观光车连接。', iconName: 'Bus' },
      { method: '返回', details: '中山陵/音乐台出入口乘坐观光车或地铁返回新街口。', iconName: 'Navigation' }
    ],
    tips: [
      '明孝陵出5号门跨陵园路即美龄宫，顺线不走回头路',
      '13:30先爬中山陵完成登山核心打卡，15:30下山到音乐台刚好休息坐下喂鸽子',
      '中山陵免费但必须提前实名预约！',
      '穿着轻便运动鞋，随身携带水和防晒用品'
    ],
    foodRecommendations: ['鸭血粉丝汤', '小鸭油烧饼', '盐水鸭拼盘', '姜撞奶']
  },
  {
    dayNumber: 3,
    date: '20日',
    fullDate: '8月20日（第三天）',
    title: '南京 City Walk',
    subtitle: '连线文博 · 顺畅就餐 · 颐和老洋房 · 十里秦淮夜游',
    themeKeywords: ['总统府', '六朝博物馆', '科巷美食', '1912/南图', '颐和路Walk', '夫子庙秦淮夜游'],
    summary: '第三天行程顺畅连贯：上午参观总统府，11:00直接步行至隔壁六朝博物馆，12:30前往科巷享用午餐，下午在1912/南图稍作休闲后打车至颐和路公馆区漫步梧桐老洋房，傍晚乘地铁前往夫子庙秦淮河夜游。',
    timeline: [
      {
        id: 'd3-1',
        time: '09:00-11:00',
        location: '南京总统府',
        title: '参观南京总统府',
        experienceHighlight: '近现代历史变迁核心，太平天国天王府与总统府旧址，西花园煦园',
        note: '中西合璧建筑与江南园林美学',
        category: 'spot',
        coordinates: { x: 65, y: 25 },
        reservationRequired: true,
        recommendedDuration: '2小时',
        subwayStation: '大行宫站（2/3号线）',
        tips: ['大行宫站5号口出步行即达']
      },
      {
        id: 'd3-2',
        time: '11:00-12:30',
        location: '六朝博物馆',
        title: '步行至隔壁六朝博物馆参观',
        experienceHighlight: '直接步行至隔壁的六朝博物馆，省去中间折返体力。贝聿铭事务所设计的极高审美空间',
        note: '竹林影壁、六朝青瓷与瓦当美学',
        category: 'spot',
        coordinates: { x: 62, y: 48 },
        photographySpot: true,
        recommendedDuration: '1.5小时',
        tips: ['与总统府仅一墙之隔，步行一两分钟即达，体验极顺畅']
      },
      {
        id: 'd3-3',
        time: '12:30-14:00',
        location: '科巷小吃街',
        title: '前往科巷享用午餐与咖啡休息',
        experienceHighlight: '从六朝博物馆步行或骑车前往科巷约1公里，刚好迎来午餐高峰，吃饱后可在附近咖啡店休息',
        note: '地道南京美食小吃集中地',
        category: 'food',
        coordinates: { x: 55, y: 38 },
        recommendedDuration: '1.5小时',
        tips: ['推荐草包包子、左师傅牛肉锅贴、许阿姨糕团、叶新皮肚面']
      },
      {
        id: 'd3-4',
        time: '14:00-15:00',
        location: '1912街区 / 南京图书馆',
        title: '1912街区 / 南京图书馆城市休闲',
        experienceHighlight: '漫步红砖民国街区，喝咖啡或在南图感受民国文脉',
        note: '古今融合文创氛围',
        category: 'leisure',
        coordinates: { x: 68, y: 55 },
        recommendedDuration: '1小时'
      },
      {
        id: 'd3-5',
        time: '15:00-17:30',
        location: '颐和路历史文化街区',
        title: '颐和路 City Walk 漫步',
        experienceHighlight: '从大行宫/科巷/南图区域打车或坐地铁到颐和路公馆区，“一条颐和路，半部民国史”，漫步梧桐老洋房',
        note: '黄墙红瓦、高大梧桐树、电影感写真',
        category: 'spot',
        coordinates: { x: 82, y: 65 },
        photographySpot: true,
        recommendedDuration: '2.5小时',
        tips: ['沿颐和路—江苏路—宁海路慢行，拍照复古有质感']
      },
      {
        id: 'd3-6',
        time: '17:30-18:30',
        location: '颐和路至夫子庙通勤',
        title: '预留1小时通勤前往夫子庙',
        experienceHighlight: '晚高峰道路极堵，强烈建议乘坐地铁（约30分钟即可到达）',
        category: 'transport',
        coordinates: { x: 60, y: 78 },
        subwayStation: '夫子庙站 / 武定门站（3号线）',
        tips: ['强烈推荐搭乘地铁3号线避开路面交通拥堵']
      },
      {
        id: 'd3-7',
        time: '18:30 以后',
        location: '夫子庙 — 乌衣巷 — 秦淮河',
        title: '夫子庙—乌衣巷—秦淮河夜游',
        experienceHighlight: '夜游秦淮河，“十里秦淮，桨声灯影”，漫步乌衣巷与江南贡院',
        note: '朱雀桥边野草花，乌衣巷口夕阳斜',
        category: 'spot',
        coordinates: { x: 60, y: 88 },
        photographySpot: true,
        recommendedDuration: '2.5小时',
        tips: ['可选择游船游览秦淮河两岸灯影夜景']
      }
    ],
    transportAdvice: [
      { method: '步行', details: '总统府出口直接步行至隔壁六朝博物馆，仅需1分钟。', iconName: 'Footprints' },
      { method: '地铁/打车', details: '六朝博物馆至科巷约1公里；科巷/南图打车或乘地铁至颐和路。', iconName: 'Car' },
      { method: '地铁推荐', details: '颐和路前往夫子庙晚高峰极堵，强烈建议乘坐地铁3号线（约30分钟）。', iconName: 'Train' }
    ],
    tips: [
      '总统府与六朝博物馆挨在一起，顺路游览不浪费体力',
      '科巷建议12:30抵达，吃完在咖啡馆稍作充能休息',
      '17:30颐和路前往夫子庙一定要坐地铁，避免马路拥堵',
      '夫子庙夜游华灯初上拍摄效果极佳'
    ],
    foodRecommendations: ['牛肉锅贴（科巷）', '皮肚面', '鸡鸣汤包', '鸭油烧饼', '赤豆酒酿元宵']
  },
  {
    dayNumber: 4,
    date: '21日',
    fullDate: '8月21日（第四天）',
    title: '南京回味日',
    subtitle: '深度观展 · 民国街简餐 · 中华门瓮城 · 老门东收尾返程',
    themeKeywords: ['南京博物院深度', '地下民国街', '中华门城堡', '老门东小吃', '返程'],
    summary: '第四天深度体验南京文化与老城：09:00入馆南京博物院进行深度参观（延长1小时），中途在南博地下“民国街”或数字馆餐厅解决简餐；13:30前往中华门城堡感悟明代防务；15:30漫步老门东喝茶吃小吃，慢节奏完美收尾。',
    timeline: [
      {
        id: 'd4-1',
        time: '09:00',
        location: '南京博物院',
        title: '南京博物院入馆',
        experienceHighlight: '南京文化最高浓度地点，中国三大博物馆之一',
        note: '提前在微信公众号实名预约',
        category: 'spot',
        coordinates: { x: 50, y: 18 },
        subwayStation: '明故宫站（2号线）',
        tips: ['地铁2号线明故宫站1号口出步行即达']
      },
      {
        id: 'd4-2',
        time: '09:00-13:30',
        location: '南京博物院（深度参观与民国街路餐）',
        title: '深度参观南京博物院（含民国街简餐）',
        experienceHighlight: '深度参观4.5小时（延长1小时），游览历史馆、民国馆与特展馆。中途在地下“民国街”或数字馆餐厅解决简餐',
        note: '地下民国街1:1复刻老街景，边吃边逛',
        category: 'spot',
        coordinates: { x: 50, y: 28 },
        photographySpot: true,
        reservationRequired: true,
        recommendedDuration: '4.5小时',
        tips: ['民国馆有复古车站与邮局，地下餐饮区极具风情']
      },
      {
        id: 'd4-3',
        time: '13:30-14:00',
        location: '南博至中华门城堡',
        title: '前往中华门城堡',
        experienceHighlight: '从南博打车或搭乘地铁前往中华门城堡（约20分钟）',
        category: 'transport',
        coordinates: { x: 55, y: 45 }
      },
      {
        id: 'd4-4',
        time: '14:00-15:30',
        location: '中华门城堡（瓮城）',
        title: '中华门城堡（体验明代防御体系）',
        experienceHighlight: '体验“天下第一瓮城”宏大的明代防御体系，走过二十七个藏兵洞，远眺秦淮河',
        note: '明代工匠城砖，防务智慧',
        category: 'spot',
        coordinates: { x: 62, y: 55 },
        photographySpot: true,
        recommendedDuration: '1.5小时',
        tips: ['城堡高处可拍摄大报恩寺琉璃塔与秦淮长干桥']
      },
      {
        id: 'd4-5',
        time: '15:30-17:30',
        location: '老门东历史文化街区',
        title: '老门东慢节奏休闲与秦淮小吃',
        experienceHighlight: '中华门城堡走下来步行几分钟即到老门东。喝茶、吃秦淮小吃（鸡鸣汤包、小烧饼），慢节奏完美收尾',
        note: '老街深处漫步，惬意享受度假余韵',
        category: 'spot',
        coordinates: { x: 68, y: 70 },
        photographySpot: true,
        recommendedDuration: '2小时',
        tips: ['推荐尝鲜蒋有记锅贴、鸡鸣汤包、沈记臭豆腐']
      },
      {
        id: 'd4-6',
        time: '17:30 以后',
        location: '南京南站 / 禄口机场',
        title: '收拾行囊，准备返程',
        experienceHighlight: '老门东乘地铁3号线直达南京南站（仅需15分钟），告别金陵',
        category: 'transport',
        coordinates: { x: 50, y: 95 },
        tips: ['在老门东或新街口可购买真空盐水鸭与金陵酥饼作为伴手礼']
      }
    ],
    transportAdvice: [
      { method: '地铁', details: '地铁2号线至明故宫站（南博）；老门东乘3号线直达南京南站（15分钟）。', iconName: 'Train' },
      { method: '打车/公交', details: '南博至中华门城堡可直接打车（约15-20元）。', iconName: 'Car' },
      { method: '步行', details: '中华门城堡下城墙后步行5分钟即直接进入老门东街区。', iconName: 'Footprints' }
    ],
    tips: [
      '南京博物院深度参观延长至4.5小时，充分饱览国宝重器',
      '在南博地下民国街边吃简餐边看民国风情，节省就餐时间',
      '中华门城堡与老门东相邻，步行即达',
      '返程前往南京南站乘3号线极为快捷'
    ],
    foodRecommendations: ['南京大牌档', '蒋有记牛肉锅贴', '鸡鸣汤包', '小烧饼', '沈记臭豆腐']
  }
];

export const NANJING_LANDMARKS: Landmark[] = [
  {
    id: 'lm-1',
    name: '明孝陵',
    dayNumber: 2,
    category: '古迹遗址',
    description: '明朝开国皇帝朱元璋与皇后马氏的合葬陵寝，中国明清皇陵之首，世界文化遗产。石象路四季景致如画，神道石兽神态肃穆。',
    highlight: '神道石象路、翁仲路、享殿遗址与享堂明楼',
    address: '南京市玄武区钟山风景名胜区内',
    bestTime: '08:30 - 11:30（晨光透射林间最美）',
    ticketInfo: '门票70元（包含在钟山联票内）',
    recommendedHours: '2.5 - 3小时',
    photoTip: '石象路秋季银杏与红枫映衬石兽是南京招牌镜头',
    imageUrl: mingXiaolingImg,
    tags: ['世界遗产', '明代建筑', '神道石刻', '最美石象路']
  },
  {
    id: 'lm-2',
    name: '南京总统府',
    dayNumber: 3,
    category: '民国建筑',
    description: '南京近现代历史发展的缩影，已有600多年历史。曾为清代两江总督署、太平天国天王府以及中华民国临时大总统府。',
    highlight: '子超楼、行政院大楼、太平天国天王宝座、煦园',
    address: '南京市玄武区长江路292号',
    bestTime: '09:00 - 11:30',
    ticketInfo: '门票35元（需提前公众号实名预约）',
    recommendedHours: '2 - 2.5小时',
    photoTip: '正门红墙中西合璧门楼与煦园石舫是必拍位',
    imageUrl: zongtongfuImg,
    tags: ['民国风情', '历史重地', '江南园林', '经典地标']
  },
  {
    id: 'lm-3',
    name: '南京博物院',
    dayNumber: 4,
    category: '文博展馆',
    description: '中国三大博物馆之一，简称“南博”。拥有历史馆、特展馆、数字馆、艺术馆、非遗馆、民国馆等“一院六馆”。珍藏数十万件国宝重器。',
    highlight: '地下1:1复刻老上海民国街区、金兽、竹林七贤砖壁画',
    address: '南京市玄武区中山东路321号',
    bestTime: '09:00 - 12:30',
    ticketInfo: '免费（必须提前7天公众号预约）',
    recommendedHours: '3 - 4小时',
    photoTip: '民国馆的老式火车头与复古街灯是年代感写真胜地',
    imageUrl: nanjingMuseumImg,
    tags: ['国宝重器', '三大博物院', '民国复古馆', '文化圣地']
  },
  {
    id: 'lm-4',
    name: '美龄宫',
    dayNumber: 2,
    category: '民国建筑',
    description: '原名“国民政府主席官邸”，因宋美龄常在此居住而得名。整座建筑从空中俯瞰如同一颗巨大的绿宝石被梧桐项链所环抱。',
    highlight: '琉璃瓦大屋顶、宋美龄画室、民国豪华宴会厅',
    address: '南京市玄武区钟山风景区内',
    bestTime: '11:30 - 12:30',
    ticketInfo: '门票30元',
    recommendedHours: '1小时',
    photoTip: '航拍视角或在陵园路梧桐大道仰拍绿琉璃大屋顶',
    imageUrl: meilingPalaceImg,
    tags: ['民国美学', '深绿项链', '精致建筑', '梧桐深处']
  },
  {
    id: 'lm-5',
    name: '鸡鸣寺',
    dayNumber: 1,
    category: '古迹遗址',
    description: '“南朝四百八十寺，多少楼台烟雨中”之首。建于西晋，拥有千年香火，寺内药师佛塔耸立，紧邻古城墙与玄武湖。',
    highlight: '药师佛塔、素斋百味、古今同框展望台',
    address: '南京市玄武区鸡鸣寺路1号',
    bestTime: '16:00 - 17:00（夕阳顺光）',
    ticketInfo: '门票10元（附赠香火）',
    recommendedHours: '1小时',
    photoTip: '从鸡鸣寺黄墙眺望背后现代化紫峰大厦，感受古今穿越',
    imageUrl: jimingTempleImg,
    tags: ['千年古刹', '南朝首寺', '求姻缘祈福', '古今同框']
  },
  {
    id: 'lm-6',
    name: '夫子庙 — 秦淮河',
    dayNumber: 3,
    category: '夜景漫步',
    description: '金陵古都的象征，十里秦淮水上风情汇聚于此。两岸古建林立，灯火辉煌，乌衣巷、大照壁与画舫游船构成金陵最美夜景。',
    highlight: '秦淮画舫游船、江南贡院、乌衣巷夕阳、十里秦淮夜景',
    address: '南京市秦淮区贡院街',
    bestTime: '19:00 - 21:30（华灯初上之时）',
    ticketInfo: '街区开放免费；游船票80-100元/人',
    recommendedHours: '2.5小时',
    photoTip: '站在文德桥上拍摄双龙戏珠大照壁与画舫过桥',
    imageUrl: qinhuaiRiverImg,
    tags: ['十里秦淮', '桨声灯影', '乌衣巷', '夜游画舫']
  },
  {
    id: 'lm-7',
    name: '颐和路历史文化街区',
    dayNumber: 3,
    category: '民国建筑',
    description: '“一条颐和路，半部民国史”。拥有200多座民国时期高级公馆与老洋房，浓密的梧桐遮蔽街道，洋溢着高雅与宁静的气息。',
    highlight: '民国公馆建筑群、黄色围墙与高大梧桐树影',
    address: '南京市鼓楼区颐和路',
    bestTime: '15:30 - 18:00（日光柔和树影斑驳）',
    ticketInfo: '免费漫步',
    recommendedHours: '2 - 2.5小时',
    photoTip: '在黄墙拐角处与法式梧桐合影，文艺感十足',
    imageUrl: yiheRoadImg,
    tags: ['City Walk', '最美梧桐街', '民国老洋房', '文艺写真']
  },
  {
    id: 'lm-8',
    name: '中华门城堡（瓮城）',
    dayNumber: 4,
    category: '古迹遗址',
    description: '明代南京城墙的正南门，也是世界上保存最完好、结构最复杂的古城堡式瓮城，被称为“天下第一瓮城”。',
    highlight: '三重瓮城、二十七个藏兵洞、千斤闸槽与明代铭文砖',
    address: '南京市秦淮区中华门城堡',
    bestTime: '13:30 - 15:00',
    ticketInfo: '门票50元',
    recommendedHours: '1.5小时',
    photoTip: '登顶城墙宽阔平台俯瞰城南老街与外秦淮河',
    imageUrl: zhonghuamenImg,
    tags: ['天下第一瓮城', '明代城墙', '军事防御', '城南展望']
  }
];

export const NANJING_FOODS: FoodItem[] = [
  {
    id: 'food-1',
    name: '金陵盐水鸭',
    chineseName: '盐水鸭 / 板鸭',
    category: '特色主食',
    priceRange: '¥35 - ¥60 / 份',
    mustTrySpot: '韩复兴、桂花鸭、南京大牌档',
    description: '南京名扬天下的招牌冷盘。皮白油润，肉嫩微咸，香鲜味美，毫无膻味，具有“皮白肉红骨头绿”的古法特点。',
    tasteProfile: '咸香鲜嫩、多汁不腻',
    imageUrl: yansuidyaImg,
    tags: ['金陵招牌', '必吃第一名', '非遗技艺']
  },
  {
    id: 'food-2',
    name: '南京鸭血粉丝汤',
    chineseName: '鸭血粉丝汤',
    category: '特色主食',
    priceRange: '¥18 - ¥28 / 碗',
    mustTrySpot: '回味鸭血粉丝汤、小潘记、鸭得堡',
    description: '老南京人的灵魂早晚餐。老鸭高汤熬制，配以鲜嫩鸭血、鸭肝、鸭肠、豆腐果和细腻绿豆粉丝，撒上一把香菜与特制红油。',
    tasteProfile: '汤鲜味浓、丰富爽口',
    imageUrl: yaxuefensiImg,
    tags: ['南京灵魂', '汤头浓郁', '全天候美食']
  },
  {
    id: 'food-3',
    name: '牛肉锅贴',
    chineseName: '牛肉锅贴',
    category: '街头小吃',
    priceRange: '¥12 - ¥18 / 份（一两4个）',
    mustTrySpot: '蒋有记（老门东店）、左师傅牛肉锅贴（科巷店）、李记清真馆',
    description: '外皮金黄酥脆，馅心选用优质牛肉与特制牛油，咬下一口汤汁迸发，焦香扑鼻。',
    tasteProfile: '外脆内嫩、咬开爆汁',
    imageUrl: niurouguotieImg,
    tags: ['科巷排队王', '爆汁锅贴', '金黄清真']
  },
  {
    id: 'food-4',
    name: '皮肚面',
    chineseName: '老南京皮肚面',
    category: '特色主食',
    priceRange: '¥22 - ¥38 / 碗',
    mustTrySpot: '叶新皮肚面、项记面馆、易记面馆',
    description: '以干金黄皮肚（炸猪皮）为核心，加上猪肝、肉丝、木耳、青菜、西红柿等多重配料大锅单碗现烹，面条劲道，汤头鲜美。',
    tasteProfile: '料丰量足、吸满汤汁',
    imageUrl: pidumianImg,
    tags: ['大碗现煮', '吸汁皮肚', '金陵豪爽']
  },
  {
    id: 'food-5',
    name: '桂花糖芋苗',
    chineseName: '桂花糖芋苗',
    category: '传统糕点',
    priceRange: '¥8 - ¥12 / 碗',
    mustTrySpot: '南京大牌档、芳婆糕团店、白下元宵铺',
    description: '南京传统甜品代表。选用新鲜小芋苗，加入红糖、藕粉与金桂花慢火熬煮，色泽红润光亮，香甜软糯。',
    tasteProfile: '桂香浓郁、甜糯爽滑',
    imageUrl: tangyumiaoImg,
    tags: ['桂花飘香', '暖心甜品', '女子极爱']
  },
  {
    id: 'food-6',
    name: '鸡鸣汤包 / 鸭油烧饼',
    chineseName: '鸡鸣汤包与鸭油烧饼',
    category: '传统糕点',
    priceRange: '¥15 - ¥25 / 份',
    mustTrySpot: '鸡鸣汤包、小小鸭油烧饼',
    description: '汤包褶朝下，皮薄馅大，汤汁清甜；鸭油烧饼用烤鸭油起酥，分咸甜两种，层层酥脆。',
    tasteProfile: '咸甜酥脆、鲜汤回甘',
    imageUrl: tangbaoShaobingImg,
    tags: ['小吃之王', '酥脆起酥', '南京传统']
  }
];

export const NANJING_SOUVENIRS: SouvenirItem[] = [
  {
    id: 'souv-1',
    name: '南京云锦（非遗工艺品）',
    category: '非遗文化',
    description: '中国四大名锦之首，有“寸锦寸金”之美誉。纹样富丽堂皇，可购买云锦胸针、书签、围巾或艺术小摆件。',
    priceRange: '¥60 - ¥500+',
    bestBuyingLocations: ['南京云锦博物馆', '南京博物院文创店', '新街口德基广场店'],
    imageUrl: yunjinImg,
    recommendationRating: 5
  },
  {
    id: 'souv-2',
    name: '雨花石（天然特色纪念）',
    category: '特色纪念',
    description: '南京特产天然玛瑙观赏石，色彩斑斓，纹理天然奇特，放入清水中观赏如水中玉花，极具纪念价值。',
    priceRange: '¥20 - ¥150 / 盒',
    bestBuyingLocations: ['雨花台纪念品店', '夫子庙传统工艺店', '老门东专营店'],
    imageUrl: yuhuashiImg,
    recommendationRating: 4
  },
  {
    id: 'souv-3',
    name: '老字号真空包装盐水鸭',
    category: '名特产品',
    description: '经过真空封存保存的高品质金陵盐水鸭，开袋即享或微烫即食，是馈赠亲友最为地道的南京礼物。',
    priceRange: '¥48 - ¥98 / 只',
    bestBuyingLocations: ['韩复兴老字号', '桂花鸭直营店', '新街口盒马/苏果超级市场'],
    imageUrl: duckGiftImg,
    recommendationRating: 5
  },
  {
    id: 'souv-4',
    name: '金陵酥饼与桂花糕礼盒',
    category: '名特产品',
    description: '包含了桂花绿豆糕、鸭油酥饼、松子枣泥糕等金陵四时礼盒，包装融入民国复古插画，精致美观。',
    priceRange: '¥38 - ¥88 / 盒',
    bestBuyingLocations: ['老门东传统礼品店', '南京大牌档文创集市', '新街口购物中心'],
    imageUrl: pastryGiftImg,
    recommendationRating: 5
  }
];

export const INITIAL_EXPENSES: ExpenseItem[] = [
  { id: 'exp-1', category: '住宿', name: '玄武湖/新街口精品酒店（3晚）', amount: 1200, perPerson: false },
  { id: 'exp-2', category: '门票', name: '明孝陵+美龄宫+音乐台联票', amount: 100, perPerson: true },
  { id: 'exp-3', category: '门票', name: '总统府门票', amount: 35, perPerson: true },
  { id: 'exp-4', category: '门票', name: '中华门城堡门票', amount: 50, perPerson: true },
  { id: 'exp-5', category: '门票', name: '秦淮河画舫游船票', amount: 90, perPerson: true },
  { id: 'exp-6', category: '餐饮', name: '4天美食（鸭血粉丝汤、盐水鸭、科巷、老门东等）', amount: 500, perPerson: true },
  { id: 'exp-7', category: '交通', name: '南京市内地铁+打车+景区观光车', amount: 150, perPerson: true },
  { id: 'exp-8', category: '购物伴手礼', name: '盐水鸭礼盒+雨花石/云锦文创', amount: 200, perPerson: true }
];
