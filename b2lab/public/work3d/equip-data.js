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

EQUIP.push({id:'paint-line',en:'Paint Coating Line',zh:'噴漆產線',icon:'factory',note:'依 8 張現場照片建構，尺寸與配置為示意；未拍到的室內不展開。',parts:[
{n:1,en:'Overhead conveyor',zh:'懸吊輸送軌',desc:'橘色軌道沿噴漆房外側轉彎，吊具沿軌道輸送。',ex:'Keep the overhead conveyor clear of loose tools.',exCn:'懸吊輸送軌附近不要放散落的工具。',point:[3.6,2.2,.96],cam:[6.3,3.2,3.5],target:[3.6,1.8,.3]},
{n:2,en:'Hanger hook',zh:'吊鉤',desc:'軌道下方的彎鉤，用來懸掛工件或吊具。',ex:'Replace the bent hanger hook before the next shift.',exCn:'下一班上工前，把彎掉的吊鉤換掉。',point:[-.1,1.6,.96],cam:[.2,2.1,3.3],target:[0,1.6,1]},
{n:3,en:'Gantry frame',zh:'黃色吊架',desc:'照片中的黃色立柱與橫梁，支撐上方吊掛裝置。',ex:'Check the bolts at the base of the gantry frame.',exCn:'檢查黃色吊架底座的螺栓。',point:[1.85,2.62,1.65],cam:[4.5,3.8,5],target:[1,1.4,.8]},
{n:4,en:'Chain hoist',zh:'鏈條吊車',desc:'紅色橫梁下方的吊車與垂吊鏈條。',ex:'Raise the chain hoist slowly to avoid swinging the load.',exCn:'慢慢升起鏈條吊車，避免吊物晃動。',point:[-1.2,2.2,1.2],cam:[-2.5,3.2,4],target:[-1.2,1.9,1.1]},
{n:5,en:'Spray booth enclosure',zh:'噴漆房外殼',desc:'白色封閉房體，外側有出入門與觀察窗；內部未在照片中完整呈現。',ex:'Close the spray booth door after the inspection.',exCn:'檢查完後，把噴漆房的門關好。',point:[.4,1.15,.29],cam:[1,2.4,5],target:[.4,1.3,-.3]},
{n:6,en:'Dust collection unit',zh:'集塵設備',desc:'端部的白色箱體、下方錐斗與上方金屬風管，依照片可見外觀建模。',ex:'Report any unusual noise from the dust collection unit.',exCn:'集塵設備有異音時要回報。',point:[4.35,1.4,-1.1],cam:[7.5,3.0,2.3],target:[4.1,1.35,-1.1]},
{n:7,en:'Hanger storage rack',zh:'吊具存放架',desc:'外側黑色架子集中存放長條吊具。',ex:'Return the empty hangers to the storage rack.',exCn:'空吊具用完後放回存放架。',point:[1.7,.8,1.18],cam:[3,2,4],target:[1.7,.5,1.1]}
]});
