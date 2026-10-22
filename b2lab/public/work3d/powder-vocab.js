// 複合設備名稱依組成詞的 Cambridge 美式讀音組合；定義與例句為原創教材。
export function enrichPowderGuide(e){
 const stages=[
 ['/ˌpriːˈtriːt.mənt/','Cleaning and preparing parts before coating.','Pretreatment removes oil and dirt from the metal.','前處理去除金屬上的油污與髒污。'],
 ['/ˈdraɪ.ɑːf/','Removing water from parts before powder is applied.','The parts pass through the dry-off stage before spraying.','工件在噴粉前會經過水切烘乾段。'],
 ['/ˈpaʊ.dɚ ˌæp.ləˈkeɪ.ʃən/','Putting powder onto the surface of a part.','Even powder application helps produce a smooth finish.','均勻上粉有助於形成平整的塗裝表面。'],
 ['/rɪˈkʌv.ɚ.i ænd fɪlˈtreɪ.ʃən/','Collecting unused powder and removing particles from air.','Recovery and filtration help keep powder inside the system.','回收與過濾有助於將粉末留在系統內。'],
 ['/ˈkjʊr.ɪŋ ænd ˈkuː.lɪŋ/','Heating the coating to cure it, then letting the parts cool.','Curing and cooling take place after powder application.','上粉後會進行固化與冷卻。'],
 ['/juːˈtɪl.ə.t̬iz ænd ˈkwɑː.lə.t̬i kənˈtroʊl/','Services that support the line and checks on the finished coating.','We check the air supply and inspect the finished coating.','我們檢查供氣，並檢驗完成的塗層。']
 ];
 const groups=[
 [
 ['Pretreatment washer','前處理清洗設備','/ˌpriːˈtriːt.mənt ˈwɑː.ʃɚ/','Equipment that cleans parts before coating.','The pretreatment washer cleans the brackets before coating.','前處理清洗設備在塗裝前清洗支架。'],
 ['Circulation pump','循環泵','/ˌsɝː.kjəˈleɪ.ʃən pʌmp/','A pump that keeps liquid moving through a system.','The circulation pump moves the liquid through the tank system.','循環泵讓液體在槽體系統中循環流動。'],
 ['Water treatment system','水處理系統','/ˈwɑː.t̬ɚ ˈtriːt.mənt ˈsɪs.təm/','Equipment that improves the quality of process water.','The water treatment system supplies water to the rinse stage.','水處理系統供水給水洗段。']
 ],
 [['Dry-off oven','水切烘乾爐','/ˈdraɪ.ɑːf ˈʌv.ən/','An oven that removes water from cleaned parts.','The dry-off oven removes moisture before the parts reach the booth.','工件到達噴粉室前，水切烘乾爐會去除水分。']],
 [
 ['Electrostatic powder gun','靜電粉體噴槍','/ɪˌlek.troʊˈstæt̬.ɪk ˈpaʊ.dɚ ɡʌn/','A gun that charges powder so it is attracted to a grounded part.','The operator uses an electrostatic powder gun to coat the frame.','操作員用靜電粉體噴槍塗裝框架。'],
 ['Powder feed center','供粉中心','/ˈpaʊ.dɚ fiːd ˈsen.t̬ɚ/','Equipment that supplies powder to the spray guns.','The powder feed center delivers powder to the automatic guns.','供粉中心把粉末送到自動噴槍。'],
 ['Powder coating booth','噴粉室','/ˈpaʊ.dɚ ˈkoʊ.t̬ɪŋ buːθ/','An enclosed area where parts are sprayed with powder.','The doors are coated inside the powder coating booth.','門板在噴粉室內進行塗裝。']
 ],
 [
 ['Powder recovery system','粉末回收系統','/ˈpaʊ.dɚ rɪˈkʌv.ɚ.i ˈsɪs.təm/','Equipment that collects powder that did not stick to the parts.','The powder recovery system collects unused powder from the booth.','粉末回收系統收集噴粉室內未附著的粉末。'],
 ['Cyclone separator','旋風分離器','/ˈsaɪ.kloʊn ˈsep.ə.reɪ.t̬ɚ/','Equipment that uses spinning air to separate powder from the airflow.','The cyclone separator removes powder from the moving air.','旋風分離器把粉末從流動的空氣中分離出來。'],
 ['Cartridge filter','濾筒','/ˈkɑːr.trɪdʒ ˈfɪl.t̬ɚ/','A replaceable filter that catches fine particles.','The cartridge filter catches fine powder in the exhaust air.','濾筒攔截排出氣流中的細粉末。']
 ],
 [
 ['Curing oven','固化爐','/ˈkjʊr.ɪŋ ˈʌv.ən/','An oven that heats the applied powder so it forms a cured coating.','The coated parts move into the curing oven after spraying.','噴粉後，已上粉的工件會進入固化爐。'],
 ['Cooling area','冷卻區','/ˈkuː.lɪŋ ˈer.i.ə/','An area where hot coated parts are allowed to cool.','The racks stay in the cooling area before inspection.','置物架在檢驗前先留在冷卻區。']
 ],
 [
 ['Compressed air','壓縮空氣','/kəmˈprest er/','Air stored or supplied under pressure.','The spray system uses clean, dry compressed air.','噴塗系統使用乾淨、乾燥的壓縮空氣。'],
 ['Air dryer','空氣乾燥機','/er ˈdraɪ.ɚ/','Equipment that removes moisture from compressed air.','The air dryer reduces moisture in the compressed air supply.','空氣乾燥機降低壓縮空氣供氣中的水分。'],
 ['Overhead conveyor','懸吊輸送機','/ˌoʊ.vɚˈhed kənˈveɪ.ɚ/','A conveyor above the floor that carries hanging parts.','The overhead conveyor carries the panels from one stage to the next.','懸吊輸送機把面板從一個製程段送到下一段。'],
 ['Grounding','接地','/ˈɡraʊn.dɪŋ/','Connecting an object to electrical ground.','Good grounding helps charged powder reach the metal surface.','良好的接地有助於帶電粉末附著到金屬表面。'],
 ['Coating thickness gauge','塗膜膜厚計','/ˈkoʊ.t̬ɪŋ ˈθɪk.nəs ɡeɪdʒ/','A tool that measures how thick a coating is.','Use the coating thickness gauge to measure the finished panel.','用塗膜膜厚計量測已完成塗裝的面板。'],
 ['Control panel','控制面板','/kənˈtroʊl ˈpæn.əl/','A panel with switches, displays, or controls for equipment.','The control panel shows the current line status.','控制面板顯示產線目前的狀態。']
 ]
 ];
 e.processGuide.forEach((s,i)=>Object.assign(s,{ipa:stages[i][0],def:stages[i][1],ex:stages[i][2],exCn:stages[i][3],terms:groups[i].map(t=>({en:t[0],zh:t[1],ipa:t[2],def:t[3],ex:t[4],exCn:t[5],pos:'n.'}))}));
}
