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
