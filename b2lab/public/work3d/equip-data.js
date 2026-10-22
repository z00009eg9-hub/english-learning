import { applyPowderLearning } from './powder-learning.js';
export const EQUIP = [{
  id: 'cmm-arm', en: 'Measurement Workstation', zh: '量測工作站', icon: 'gauge',
  note: '依照片建構 · 非尺寸精確模型',
  parts: [
    { n: 1, en: 'Granite surface plate', zh: '花崗石平台', ex: 'Wipe the granite surface plate before the next inspection.', exCn: '下次檢查前，先把花崗石平台擦乾淨。', desc: '放工件的平台，量之前先擦乾淨。', point: [1.05,1.64,.39], cam: [3.4,3,3.8], target: [.57,1.55,0] },
    { n: 2, en: 'Positioning fixture', zh: '定位治具', ex: 'Check the positioning fixture before you load another part.', exCn: '放下一個工件前，先檢查定位治具。', desc: '用來定位工件，放好後確認沒有鬆動。', point: [.95,2.55,.26], cam: [3,3,4], target: [.57,2.1,.2] },
    { n: 3, en: 'Magnetic holding block', zh: '磁性固定塊', ex: 'Check that the magnetic holding block is secure before you start measuring.', exCn: '開始量測前，先確認磁性固定塊有固定好。', desc: '用磁力把工件吸住固定，避免量測時移動。', point: [-.05,1.75,-.1], cam: [1,3.4,3.4], target: [.03,1.75,-.2] },
    { n: 4, en: 'Articulated measuring arm', zh: '關節式量測臂', ex: 'Move the articulated measuring arm slowly around the bracket.', exCn: '把關節式量測臂慢慢移到支架周圍。', desc: '可以轉動關節，讓探頭靠近要量的位置。', point: [-.82,3,0], cam: [2,2.6,5.6], target: [-.65,1.9,0] }
  ]
}];

EQUIP.push({id:'paint-line',en:'Paint Coating Line',zh:'噴漆產線',icon:'factory',note:'依 18 張現場照片建構，尺寸與相對位置為示意。點第 8–17 項查看門內設備；點第 1–7 項或「全景」返回外觀。',parts:[
{n:1,en:'Overhead conveyor',zh:'懸吊輸送軌',desc:'橘色軌道沿噴漆房外側轉彎，吊具沿軌道輸送。',ex:'Keep the overhead conveyor clear of loose tools.',exCn:'懸吊輸送軌附近不要放散落的工具。',point:[3.6,2.2,.96],cam:[6.3,3.2,3.5],target:[3.6,1.8,.3]},
{n:2,en:'Hanger hook',zh:'吊鉤',desc:'軌道下方的彎鉤，用來懸掛工件或吊具。',ex:'Replace the bent hanger hook before the next shift.',exCn:'下一班上工前，把彎掉的吊鉤換掉。',point:[-.1,1.6,.96],cam:[.2,2.1,3.3],target:[0,1.6,1]},
{n:3,en:'Gantry frame',zh:'黃色吊架',desc:'照片中的黃色立柱與橫梁，支撐上方吊掛裝置。',ex:'Check the bolts at the base of the gantry frame.',exCn:'檢查黃色吊架底座的螺栓。',point:[1.9,2.65,1.95],cam:[4.5,3.8,5],target:[1,1.4,.8]},
{n:4,en:'Chain hoist',zh:'鏈條吊車',desc:'紅色橫梁下方的吊車與垂吊鏈條。',ex:'Raise the chain hoist slowly to avoid swinging the load.',exCn:'慢慢升起鏈條吊車，避免吊物晃動。',point:[.12,2.27,1.18],cam:[1.5,3.2,4],target:[.12,1.9,1.1]},
{n:5,en:'Spray booth enclosure',zh:'噴漆房外殼',desc:'白色房體外側有門與觀察窗。新增內部照片後，可點第 8–17 項切換門內設備示意。',ex:'Close the spray booth door after the inspection.',exCn:'檢查完後，把噴漆房的門關好。',point:[.4,1.15,.29],cam:[1,2.4,5],target:[.4,1.3,-.3]},
{n:6,en:'Dust collection unit',zh:'集塵設備',desc:'端部的白色箱體、下方錐斗與上方金屬風管，依照片可見外觀建模。',ex:'Report any unusual noise from the dust collection unit.',exCn:'集塵設備有異音時要回報。',point:[4.35,1.4,-1.1],cam:[7.5,3.0,2.3],target:[4.1,1.35,-1.1]},
{n:7,en:'Hanger storage rack',zh:'吊具存放架',desc:'外側黑色架子集中存放長條吊具。',ex:'Return the empty hangers to the storage rack.',exCn:'空吊具用完後放回存放架。',point:[2.35,.8,.61],cam:[3.5,1.9,3.8],target:[2.1,.55,.65]}
]});

EQUIP.find(e=>e.id==='paint-line').parts.push(
{n:8,en:'Interior overview',zh:'門內設備總覽',interior:true,desc:'切換為移除外殼的內部示意，顯示照片可見的高架箱體、平台、輸送軌及地面設備。相對位置依照片估算。',ex:'Check the equipment layout before moving the cart inside.',exCn:'把推車移進去前，先確認設備配置。',point:[0,1.8,-.6],cam:[8,5.1,10],target:[-.3,1.4,-.7]},
{n:9,en:'Elevated metal enclosure',zh:'高架金屬箱體',interior:true,desc:'長形金屬箱體由白色鋼柱架高，端部可見黑色遮簾。照片無法確認內部構造與用途，因此保留外觀。',ex:'Keep the area beneath the elevated enclosure clear.',exCn:'高架箱體下方的區域要保持淨空。',point:[.8,2.3,-.48],cam:[4,3.8,4.5],target:[0,1.9,-.8]},
{n:10,en:'Maintenance platform',zh:'高架維修平台',interior:true,desc:'端部橘色網格平台與護欄，旁邊有白色直梯；上方輸送軌轉彎進入金屬箱體。',ex:'Use the ladder to reach the maintenance platform.',exCn:'使用梯子登上維修平台。',point:[-3.55,1.9,-.14],cam:[-6,3.4,2.7],target:[-2.9,1.8,-.6]},
{n:11,en:'Twin-tower unit',zh:'藍色雙塔設備',interior:true,desc:'照片中的兩支藍色直立筒體，共用上下管路，中央有控制盒。設備功能與型號尚未確認。',ex:'Check the readings on the twin-tower unit.',exCn:'檢查雙塔設備上的讀值。',point:[-.73,.7,-.59],cam:[.3,1.6,2.3],target:[-.73,.65,-.8]},
{n:12,en:'Blue equipment cabinet',zh:'藍灰設備機櫃',interior:true,desc:'雙塔左側的藍灰大型機櫃，有散熱槽與上方金屬風管；依照片重建可見外觀。',ex:'Keep the cabinet vents free of dust.',exCn:'機櫃的散熱孔要保持乾淨。',point:[-2.05,.75,-.6],cam:[-3.5,1.9,2.2],target:[-2,.75,-.9]},
{n:13,en:'Grated work area',zh:'格柵工作區',interior:true,desc:'金屬格柵地面延伸至不鏽鋼槽體，旁邊有輸送軌與白色支架。',ex:'Remove loose items from the grated work area.',exCn:'把格柵工作區內散落的物品清走。',point:[1.5,.15,-.6],cam:[3.7,2.3,2.4],target:[1.5,.5,-.8]}
);

EQUIP.find(e=>e.id==='paint-line').parts.push(
{n:14,en:'Filtration and softening system',zh:'過濾與軟化設備組',interior:true,desc:'依近照的「多介質過濾」「軟化器」標示補上淺綠筒體、頂部閥組、固定帶與不鏽鋼控制架。',ex:'Record the readings on the filtration and softening system.',exCn:'記錄過濾與軟化設備組的讀值。',point:[-.40,.9,-2.38],cam:[-2.8,1.9,-5.0],target:[-.15,.70,-2.1]},
{n:15,en:'Stainless steel tank',zh:'不鏽鋼槽與上方馬達',interior:true,desc:'補上槽體三道折邊、上蓋提把、立式馬達散熱片與壓力表；配置依照片估算。',ex:'Check the gauge above the stainless steel tank.',exCn:'檢查不鏽鋼槽上方的壓力表。',point:[2.05,1.0,-2.35],cam:[3.2,2.1,-4.8],target:[2,.65,-2.1]},
{n:16,en:'Burner-equipped enclosure',zh:'紅色燃燒器箱體',interior:true,desc:'兩座金屬箱體前方裝有紅色燃燒器，並有表頭、金屬軟管與黃色上方管線；未推測箱內結構。',ex:'Report any unusual noise from the burner-equipped enclosure.',exCn:'燃燒器箱體有異音時要回報。',point:[-2.7,.6,-1.50],cam:[-4,1.65,.6],target:[-2.7,.65,-1.9]},
{n:17,en:'Gray control cabinet',zh:'灰色高控制櫃',interior:true,desc:'依近照補上高櫃、圓形散熱風扇、下方百葉與頂端燈號。',ex:'Keep the control cabinet ventilation openings clear.',exCn:'控制櫃的通風孔要保持暢通。',point:[3.56,1.30,.28],cam:[4.8,1.8,2.7],target:[3.39,.7,.1]}
);

applyPowderLearning(EQUIP.find(e=>e.id==='paint-line'));
