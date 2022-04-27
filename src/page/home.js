import React from 'react'
import { List, Divider } from 'antd';
import { Link } from 'react-router-dom';

export default function home() {
  return (
    <div className='App'>
        <h1 style={{ textAlign: 'center', fontWeight: 'bolder' }}>基因改造相關資料</h1>
        <a href='http://140.115.126.175:8000/' style={{ display: 'block', textAlign: 'center' }}>返回探究系統</a>
          <List size="large">
            <List.Item>
              <List.Item.Meta title={<a href='http://gmo.agron.ntu.edu.tw/GMOmain24.htm' target="_blank" style={{fontSize: '20px'}}>GMO 基因改造資訊</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.womenshealthmag.com/tw/foodnutrition/diet/g36671431/genetic-modification/' target="_blank" style={{fontSize: '20px'}}>「基因改造」到底是什麼？生長快速、產量高，專家告訴你吃下「基因改造」作物的隱憂</a>} />
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://pansci.asia/archives/331266' target="_blank" style={{fontSize: '20px'}}>小「勞贖」大英雄！——認識新藥開發的幕後功臣：基改實驗鼠</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://pansci.asia/archives/334591' target="_blank" style={{fontSize: '20px'}}>人類的下個階段，從「神獸」開發潛能到「神人」？——《再．創世》專題</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.thenewslens.com/article/158022/page2' target="_blank" style={{fontSize: '20px'}}>被污名化的「基改食品」，長期以來遭遇哪些困境、誤解與陷害？</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.thenewslens.com/article/158022/page2' target="_blank" style={{fontSize: '20px'}}>科學、政治與權力：「基改生物」的管理與風險</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://pansci.asia/archives/103106' target="_blank" style={{fontSize: '20px'}}>基改作物爭議超過20年，誰說得有理？ </a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.organicconsumers.org/sites/default/files/seedybusiness.pdf' target="_blank" style={{fontSize: '20px'}}>基改企業賺錢有十五個絕招</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='http://kuobiznews.blogspot.com/2016/03/gmo-20160314.html' target="_blank" style={{fontSize: '20px'}}>GMO 基改作物 - 商機與危機：基因改造作物的種子市場</a>} />
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://blog.xuite.net/jotter009/wretch/110193627-%E6%90%B6%E6%94%BB%E7%B4%A0%E9%A3%9F%E8%88%87%E9%9D%9E%E5%9F%BA%E5%9B%A0%E6%94%B9%E9%80%A0%E5%95%86%E6%A9%9F' target="_blank" style={{fontSize: '20px'}}>搶攻素食與非基因改造商機</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.heraldmonthly.ca/newspaper/web/articleView.php?date=201808&id=6067' target="_blank" style={{fontSize: '20px'}}>基因改造食物無處不在</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.gvm.com.tw/article/12481' target="_blank" style={{fontSize: '20px'}}>標題：越洋專訪 全球最大農作物種子公司 孟山都 爭議聲中搶下90％市占</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://enlighteningthetruth.com/2022/01/16/%E6%82%84%E6%82%84%E6%94%B9%E8%AE%8A%E5%85%A8%E7%90%83%E9%A3%B2%E9%A3%9F%E7%9A%84%E9%9A%B1%E5%BD%A2%E5%A3%9F%E6%96%B7%E5%8C%96%E5%AD%B8%E5%B7%A8%E9%A0%AD-%E5%AD%9F%E5%B1%B1%E9%83%BD/' target="_blank" style={{fontSize: '20px'}}>悄悄改變全球飲食的隱形壟斷化學巨頭-孟山都</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://news.readmoo.com/2015/02/10/genetic-science/' target="_blank" style={{fontSize: '20px'}}>基因改造食品大舉入侵生活 影響的不只健康，還有生態、倫理與宗教危機？</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href=' http://gmo.agron.ntu.edu.tw/EPES/society.htm' target="_blank" style={{fontSize: '20px'}}>GMO的社會議題(消費者態度)</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://blog.simpleinfo.cc/shasha77/what-does-genetically-modified-really-mean-will-eating-gm-food-affect-your-health' target="_blank" style={{fontSize: '20px'}}>「基因改造」到底是什麼意思？吃基改食品會影響健康嗎？</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta
                title={<a href='https://www.delta-foundation.org.tw/blogdetail/3187' target="_blank" style={{fontSize: '20px'}}>台灣「非故意摻雜」基改量低於3%可標非基改 消費者知情權各國大不同</a>}
                description={
                  <ul>
                    <li><a href='https://www.coa.gov.tw/ws.php?id=2349' target="_blank" style={{fontSize: '20px'}}>可節錄第三段(三、ＧＭＯ產品議題在國際經貿組織之發展)</a></li>
                    <li><a href='https://www.coa.gov.tw/theme_data.php?theme=news&sub_theme=agri&id=2469' target="_blank" style={{fontSize: '20px'}}>基因改造作物依法嚴格管理</a></li>
                    <li><a href='https://www.mohw.gov.tw/cp-2645-20513-1.html' target="_blank" style={{fontSize: '20px'}}>基因改造食品標示新制，2015年7月1日起上路</a></li>
                    <li><a href='https://www.foodnext.net/news/newsnation/paper/5357548399' target="_blank" style={{fontSize: '20px'}}>基改豬出現！美國FDA批准史上第一個能吃也能製藥的基改動物</a></li>
                    <li><a href='https://microbiology.scu.edu.tw/MIB/lifescience/wong1/fooli506.htm' target="_blank" style={{fontSize: '20px'}}>基因改造食品的管理</a></li>
                    <li><a href='https://www.foodnext.net/science/scsource/paper/5616106961' target="_blank" style={{fontSize: '20px'}}>基因改造到底是什麼？</a></li>
                    <li><a href='https://www.foodnext.net/issue/paper/4852926145' target="_blank" style={{fontSize: '20px'}}>台灣基改農產品有哪些？從哪裡來</a></li>
                    <li><a href='https://gendoja1212.pixnet.net/blog/post/8571421-%E5%9F%BA%E5%9B%A0%E9%BB%83%E8%B1%86%E6%9C%89%E6%AF%92%E3%80%82%E8%80%8C%E5%8F%B0%E7%81%A3%E9%80%B2%E5%8F%A3%E9%BB%83%E8%B1%86%E4%B8%AD%E6%9C%8999%25%E6%98%AF%E5%9F%BA%E5%9B%A0' target="_blank" style={{fontSize: '20px'}}>國際社會對基因改造食物無共識</a></li>
                  </ul>
                }
              />
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.seinsights.asia/news/131/2834' target="_blank" style={{fontSize: '20px'}}>標示基因改造、消費者有「知」的權利？美國大企業與食安團體的長期對抗賽</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.cfs.gov.hk/tc_chi/programme/programme_gmf/programme_gmf_gi_info5.html' target="_blank" style={{fontSize: '20px'}}>基因改造食物／農作物所引起的關注</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://microbiology.scu.edu.tw/MIB/lifescience/wong1/fooli504.htm' target="_blank" style={{fontSize: '20px'}}>基因改造食品對環境生態的影響</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://geneonline.news/gmo-biological-diversity/' target="_blank" style={{fontSize: '20px'}}>有機農業為何反對基改生物？</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://safesoybeans.com.tw/%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF/%E7%92%B0%E4%BF%9D%E4%BA%BA%E5%A3%AB%E6%87%89%E6%94%AF%E6%8C%81%E5%9F%BA%E6%94%B9%E9%A3%9F%E5%93%81' target="_blank" style={{fontSize: '20px'}}>環保人士應支持基改食品</a>}/>
            </List.Item>
          </List>
    </div>
  )
}
