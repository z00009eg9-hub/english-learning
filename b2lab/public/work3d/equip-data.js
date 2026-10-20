export const EQUIP = [{
  id: 'cmm-arm', en: 'Measurement Workstation', zh: '量測工作站',
  note: '依照片建構 · 非尺寸精確模型',
  parts: [
    { n: 1, en: 'Granite surface plate', zh: '花崗石平台', ex: 'Wipe the granite surface plate before the next inspection.', exCn: '下次檢查前，先把花崗石平台擦乾淨。', desc: '放工件的平台，量之前先擦乾淨。', point: [-1.15,1.65,.65], cam: [4,3.4,5], target: [-.45,1.25,0] },
    { n: 2, en: 'Positioning fixture', zh: '定位治具', ex: 'Check the positioning fixture before you load another part.', exCn: '放下一個工件前，先檢查定位治具。', desc: '用來定位工件，放好後確認沒有鬆動。', point: [-.5,2.55,-.5], cam: [2,3.3,3.5], target: [-.5,2,-.25] },
    { n: 3, en: 'Articulated measuring arm', zh: '關節式量測臂', ex: 'Move the articulated measuring arm slowly around the bracket.', exCn: '把關節式量測臂慢慢移到支架周圍。', desc: '可以轉動關節，讓探頭靠近要量的位置。', point: [1.8,2.65,-.03], cam: [4.8,3.5,3.8], target: [1.4,2.05,0] }
  ]
}];
