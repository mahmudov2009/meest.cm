import React from 'react'
import '../css/nav.css'
export default function firstpages() {
  return (
    <div className='div1'>
          <div className='header'>
               <div className='header_div2'>
               
               <div class="dropdown">
                      <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        O'z <img id='uz' src="data:image/jpeg;base64,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" alt="" />
                      </button>
                      <ul class="dropdown-menu">
                        <li ><a class="dropdown-item" href="#">Ua <img id='Ua' src="data:image/png;base64,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" alt="" /></a></li>
                        <li><a class="dropdown-item" href="#">Pl <img id='Pl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTGtJMTzj8IwgXMHZJ8g77A9O8J37UoduHw&usqp=CAU" alt="" /></a></li>
                      </ul>
               </div>
               <div className='header_div13'> 
        <div className='header_div5'> <a id='gg1' href="">До магазину</a></div>
        <div className='header_div6'> <a id='gg1' href="">Як самостійно замовити на маркетплейсах</a></div>
        <div className='header_div7'> <a id='gg1' href="">Тарифи викупу</a></div>
        <div className='header_div8'> <a id='gg1' href="">Доставка з Японії</a></div>
        <div className='header_div9'> <a id='gg1' href="">Доставка з Кореї</a></div>
        <div className='header_div10'> <a id='gg1' href="">Інструкція</a></div>
        <div className='header_div11'> <a id='gg1' href=""><i class="fa-solid fa-dollar-sign"></i></a><a id='de' href="">USD</a> </div>
        <div className='header_div12'> <a id='gg1' href="">Uk|Ru</a></div>
  </div>
  </div>
  <div className='header_div4'>
    <div className='header_div14'> <img id='a11' src="https://meest.cn/static/img/logo.d5df1f710652.svg" alt="" /></div>
     <div className='header_div15'><a id='gg1' href="">Як оформити доставку</a></div>
     <div className='header_div16'> <a id='gg1' href="">Тарифи та послуги</a></div>
     <div className='header_div17'> <a id='gg1' href="">Як пройти митницю</a></div>
     <div className='header_div18'> <a id='gg1' href="">FAQ та поради</a></div>
     <div className='header_div19'> <img id='wew11' src="data:image/png;base64,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" alt="" /> <a id='gg1' href="">Комерційні вантажі</a></div>
     <div className='header_div20'> <a id='gg1' href="">Контакти</a></div>
     <div className='header_div21'> <div className='div2'> <img  id='e11' src="https://meest.cn/static/svg/blackman.eded91759706.svg" alt="" /></div><div className='div3' ><p>Увійти</p></div> </div>
     </div>

     <nav className='Age'>
     <nav className='header_div22' >
      <div className='nav_div1'><h5 id='h'>Відслідкувати посилку</h5> <input id='inp1' type="text" placeholder='Miнародний номер'/></div>
      <div className='nav_div2'><h5 id='h2'>Відслідкувати посилку</h5><input id='inp2' type="text" placeholder='Трук-номер по Китаю'/></div>
      <div className='nav_div3'>
        <div className='c100'>
         <div className='c99'>
         <p id='lol'><i class="fa-solid fa-clock"></i></p>
         <h5>Графік прибуття посилок</h5>
         </div>
          <table id='p1'>
             <tr>
              <td>З Китаю</td>
              <td>У Львові</td>
              <td>Статус</td>
             </tr>
         
             <tr>
              
              <td><i class="fa-solid fa-plane-departure"></i>06Лют</td>
              <td>20 Лют</td>
              <td>В дорозі</td>
             </tr>
      
          </table>
          <a id='vov' href="">Усі відправлення</a>
        
        </div>
      </div>
    
     </nav>
  <div className='div5'>
  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
       <div className='carusel1'>
                <h2 id='g2'>06.02-20.02 <br /> склад буде <br /> закрито на <br /> прийом та <br /> відвантаження <br /> посилок</h2>
                <p id='w1'>встигніть оформити доставку до Китайського Нового року</p>
                <button id='but1'>замовити доставку</button><button id='but2'>каталог товарів</button>
       </div>
    </div>
    <div class="carousel-item">
    <div className='carusel2'>
         <h2 id='g3'>Розширюємо <br /> кордони - <br /> доставка з <br /> Японії</h2>
         <p id='w2'>Замовляйте просто, отримуйте швидко</p>
         <button id='but3'>замовити доставку</button><button id='but4'>каталог товарів</button>
    </div>
    </div>
    <div class="carousel-item">
      <div className='carusel3'>
             <h2 id='g4'>Розширюємо <br /> кордони - <br /> доставка з Кореї</h2>
             <p id='w3'>Замовляйте просто, отримуйте швидко</p>
             <button id='but5'>замовити доставку</button><button id='but6'>каталог товарів</button>
      </div>
    </div>
    <div class="carousel-item">
      <div className='carusel4'>
      <h2 id='g4'>Meest China – <br /> новий <br /> логістичний <br /> партнер Клубу <br /> Експортерів <br /> України</h2>
      <p id='w4'>Партнерство Meest China та Клубу експортерів – шлях до успіху на <br /> китайському ринку</p>
      </div>
    </div>
    <div class="carousel-item">
     <div className='carusel5'>
      <h2 id='g5'>Ми розширили <br /> категорії <br /> вантажів</h2>
      <p id='w5'>Батарейки, акумулятори, павербанки, підзарядні станції та інші категорії <br /> товарів</p>
      <button id='but7'>замовити доставку</button><button id='but8'>каталог товарів</button>
     </div>
    </div>
    <div class="carousel-item">
      <div className='carusel6'>
        <h2 id='g6'>Перше <br /> замовлення,<br /> перша вигода - <br /> 10%</h2>
        <p id='w6'>на доставку комерційного вантажу </p>
        <button id='but9'>замовити авіадоставку</button><button id='but10'>замовити доставку морем</button>
      </div>
    </div> <div class="carousel-item">
    <div className='carusel7'>
    <h2 id='g6'>Знижка на <br /> доставку до <br /> відділення <br /> Meest ПОШТА</h2>
        <p id='w6'>- 0,5$/кг на доставку авіа<br />- 0,3$/кг на доставку морем </p>
        <button id='but11'>Зареєструватися</button><button id='but12'>Детальніше</button>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
  </nav>
    <div className='div12'>
      
    </div>


          </div>
          <div className='main'>
            <div className='div24'>
             <div className='div20'> <h6 id='j2'>від $15/кг</h6> <img  id='e3' src="https://meest.cn/documents/1/plane.svg" alt="" /><p id='p2'>Авіа з Японії в Україну</p> 
             <ul id='p8'>
              <li><i class="fa-regular fa-circle-check"></i>  від 16 до 18 днів</li>
              <li><i class="fa-regular fa-circle-check"></i>  до 30 кг </li>
              <li> <i class="fa-regular fa-circle-check"></i> 2 рази на тиждень</li>                               
              <li><i class="fa-regular fa-circle-check"></i>  консолідація, фотозвіт</li>
              <li><i class="fa-regular fa-circle-check"></i>  викуп товарів</li>
            </ul>
                <button id='but111'>Детальнiше</button>
             </div>
             <div className='div21'><h6 id='j3'>від $15m/кг</h6> <img  id='e4' src="https://meest.cn/documents/1/plane.svg" alt="" /><p id='p3'>Авіа з Кореї в Україну</p>
             <ul id='p9'>
              <li><i class="fa-regular fa-circle-check"></i>  від 16 до 18 днів</li>
              <li><i class="fa-regular fa-circle-check"></i>  до 30 кг </li>
              <li> <i class="fa-regular fa-circle-check"></i> 2 рази на тиждень</li>                               
              <li><i class="fa-regular fa-circle-check"></i>  консолідація, фотозвіт</li>
              <li><i class="fa-regular fa-circle-check"></i>  викуп товарів</li>
            </ul>
                <button id='but112'>Детальнiше</button>
             </div>
             <div className='div22 '><h6 id='j4'>від $14/кг</h6> <img  id='e5' src="https://meest.cn/documents/1/plane.svg" alt="" /><p id='p4'>Авіа з Японії в Україну</p>
             <ul id='p10'>
              <li><i class="fa-regular fa-circle-check"></i>  від 16 до 18 днів</li>
              <li><i class="fa-regular fa-circle-check"></i>  до 30 кг </li>
              <li> <i class="fa-regular fa-circle-check"></i> 2 рази на тиждень</li>                               
              <li><i class="fa-regular fa-circle-check"></i>  консолідація, фотозвіт</li>
              <li><i class="fa-regular fa-circle-check"></i>  викуп товарів</li>
            </ul>
                <button id='but113'>Детальнiше</button>
             </div>
             <div className='div23'><h6 id='j5'> $15/кг + ПДВ</h6> <img  id='e6' src="https://meest.cn/documents/1/plane.svg" alt="" /><p id='p5'> Авіа з Китаю в Європу</p>
             <ul id='p11'>
              <li><i class="fa-regular fa-circle-check"></i>  від 16 до 18 днів</li>
              <li><i class="fa-regular fa-circle-check"></i>  до 30 кг </li>
              <li> <i class="fa-regular fa-circle-check"></i> 2 рази на тиждень</li>                               
              <li><i class="fa-regular fa-circle-check"></i>  консолідація, фотозвіт</li>
              <li><i class="fa-regular fa-circle-check"></i>  викуп товарів</li>
            </ul>
                <button id='but114'>Детальнiше</button>
                </div>
             </div>
             <div className='div33'>
              <div className='div34'>
                    <p id='w24'>Як купувати<br />на маркетплейсах </p>
                <button id='but121'>Перейти до інструкції</button> 
                </div>
                <div className='div35'><button id='but98'>замовити доставку</button> 
                <p id='w21'>Як купувати<br />на Meest China Shop </p>
                </div>
             </div>
             <div className='div36'>
               <div className='div37'> 
               
                   <div className='div38'>
                    <h2 id='w22'>Розрахуйте вартість доставки *</h2><button id='but333'>Для себе</button> <button id='but222'>Комерційна</button>
                   </div>
                   
      <div className='div39'>
            
           <div className='div41'>

           <p id='p34'> 1. Доставка</p>
          
         <div className='div45'><p id='j6'>З Китаю <img id='img999' src="https://www.flagistrany.ru/data/flags/emoji/facebook/256x256/cn.png" alt="" /></p></div>  
         <div className='div46'><label class="form-check-label" for="flexRadioDefault2"><h6 id='h99'> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/> Авіа</h6><p id='p99'>10-12 днів</p>    </label></div>
         <div className='div47'><label class="form-check-label" for="flexRadioDefault2"><h6 id='h102'> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>Море</h6>     <p id='p102'>За 50—55 днів.<br />Без брендових товарів </p></label>  </div>
         <div className='div48'><p id='j7'>По Україні<img id='img1000' src="data:image/png;base64,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" alt="" /></p></div>
         <div className='div49'><label class="form-check-label" for="flexRadioDefault2"><h6 id='h100'><input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault" checked/>Meest ПОШТА, Укрпошта</h6>   <p id='p100'> У відділення </p></label>  </div>
         <div className='div50'><label class="form-check-label" for="flexRadioDefault2">   <h6 id='h101'><input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault" checked/>Кур'єром або Нова Пошта</h6> <p id='p101'>Доставка в руки або в відділення</p></label>  </div>
        
           </div>
   <div className='div42'>
   <p id='p35'> 2. Складські послуги</p>
   <div className='div52'>
   <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault9" checked/><label class="form-check-label" for="flexRadioDefault2">

     <h6 id='b8'>Відправка в один <br /> клік</h6>
     <p id='h990'>Без перевірки. Без  <br />зберігання.<br /> Негайна відправка в тому <br />вигляді, в якому посилка <br />надійшла на склад</p>
   </label>
   </div>
   <div className='div53'>
   <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault9" checked/><label class="form-check-label" for="flexRadioDefault2">

     <h6 id='b9'>Об'єднання/ <br /> Розділення</h6>
     <p id='h995'>Зберігання на складі. <br /> Об'єднання з іншими <br /> товарами, або розділення <br />однієї посилки на декілька </p>

   </label>
   </div>
   <div className='div54'>
   <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault9" checked/><label class="form-check-label" for="flexRadioDefault2">

     <h6 id='b10'>Об'єднання/Розділення +<br /> перевірка</h6>
     <p id='h992'>Зберігання на складі.  <br /> Об'єднання з іншими  <br />товарами, або розділення  <br /> однієї посилки на декілька. <br />Перевірка на брак, <br />відповідність фото і <br />кількість   </p>

   </label> 
   </div>
   </div>

   <div className='div43'>
    <div className='div60'>
   <p id='p35'>3. Параметри посилки </p>
   </div>
   <div className='div55'>
   <p>Вага фактична</p><br /></div>
   <div className='div56'>
<input id='font1' type="text" placeholder=' 3   КГ' />
</div >
<div className='div57'><p id='ppp'>Чи потрібно мені платити за <br /> об'ємний вантаж?</p></div>
<div className='div58'>
<p id='w25'>Якщо об'ємна вага посилки перевищує <br />фактичну в 2 рази, то розрахункова вага <br />визначається за формулою: (об'ємна вага - <br />фактична)/2 + фактична вага. </p>
</div>
<div className='div59'>
<a id='w26' href="">+ Вказати об'єм</a>
</div>

  </div>  

       <div className='div44'>
        <div className='div61'>
             <h1 id='p900'>52  </h1><h5 id='p800'>30</h5> <h1 id='p700'>$*</h1>
            
             </div>
             <div className='div62'>
             <p id='p1100'>51.10$ за доставку </p>
             <p id='pp1'>і 1.20$ за коробку</p>
             <a id='a10' href="">+ Викуп товару</a>
             </div>
       </div>



      </div>

               </div>
             </div>
             <div className='div63'>
              <div className='div64'></div>
              <div className='div65'>

                <div className='div66'>
                  <h1 id='pp2'>Як<br /> працює<br /> доставка</h1></div>
                <div className='div67'>
                  <div className='div70'><h1 id='pp3'>1</h1> <p id='pp4'>Купуєте товар на будь-якому <br />маркетплейсі Японії, Південної <br />Кореї чи Китаю</p></div>
                  <div className='div71'><h1 id='pp5'>2</h1><p id='pp6'>Вказуєте нашу адресу і ми <br />отримуємо посилку за вас</p> </div>
                </div>
                <div className='div68'>

                  <div className='div72'>
                     <h1 id='pp7'>3</h1><p id='pp8'>Відправляємо її авіа або <br />морем до України, Румунії, <br />Угорщини, Словаччини, <br />Польщі, Німеччини</p>
                  </div>
                  <div className='div73'><h1 id='pp9'>4</h1><p id='pp10'>Доставляємо посилки <br />кур'єром або партнерськими <br />службами доставки в Україні</p></div>
                </div>
                <div className='div69'> <button id='pp11'>Детальніше</button></div>
                
              </div>
             </div>


                <div className='div74'>
                  <div className='div77'>
                
<div className='div75'>
  <p id='p32'>Як правильно<br />декларувати<br /> товари</p>
  <button id='but32'>Ознайомитись</button> 
  </div>
</div>
<div className='div78'>
<div className='div76'><p id='p64'>Що робити, якщо <br />прийшов не той товар <br />і як цього уникнути</p><button id='but64'>Детальніше</button> </div>
<div>
 
</div>
                   </div>
                   
                </div>
                <div className='div79'>
    <div className='div83'>
      <h4 id='r3'>Ми створили <br /> сервіс доставки,<br /> який<br />цінують клієнти</h4>
     <div className='div84'> <p id='r4'>40 000+</p></div>
      <div className='div85'><p id='r5'>клієнтів</p></div>
      <div className='div86'><p id='r6'>1 000 000+</p></div>
      <div className='div87'><p id='r7'>посилок доставили</p></div>
    </div>
  <div className='div80'>
    <p id='p90'>100% зручність</p>
    <ul id='ul1' >
      <li><i class="fa-regular fa-circle-check"></i>     об'єднання товарів від різних <br /> продавців в одну посилку</li>
      <li><i class="fa-regular fa-circle-check"></i>     сервіс викупу товарів з <br />  відомих маркетплейсів Японії,<br /> Південної Кореї та Китаю</li>
      <li><i class="fa-regular fa-circle-check"></i>     управління посилками через <br /> особистий кабінет Meest China</li>
    </ul>
  </div>
  <div className='div81'>
    <p id='p92'>100% експертність</p>
          <ul id='ul2'>
            <li><i class="fa-regular fa-circle-check"></i> власний склад в Гуанчжоу 5000м²</li>
            <li><i class="fa-regular fa-circle-check"></i> 15 років досвіду ведення бізнесу з<br /> Китаєм</li>
            <li><i class="fa-regular fa-circle-check"></i> підтримка клієнта на всіх етапах <br /> замовлення</li>
          </ul>
  </div>
  <div className='div82'>
  <p id='p91'>100% безпека</p>
  <ul id='ul3'>
    <li><i class="fa-regular fa-circle-check"></i> перевірка товару</li>
    <li><i class="fa-regular fa-circle-check"></i> якісна упаковка</li>
    <li><i class="fa-regular fa-circle-check"></i> повне страхування</li>
  </ul>
  </div>
  </div>




  <div className='div88'>
   <div className='div89'>
    <div className='div91'>
    <h2 id='hh1'>Власний сучасний склад в <br /> Гуанчжоу</h2>
    <p id='hh2'>У нас свій власний склад в Китаї, площею 5000м², де зберігаються всі <br /> ваші посилки. Також ми надаємо ключові складські послуги</p>
   
    </div>
   <div className='div92'>
    <img id='uy' src="https://meest.cn/documents/6/stock-1.svg" alt="" />
    <h4 id='hh3'>Об'єднання $0,2/кг</h4>
    <p id='hh4'>Об'єднуємо товари від різних постачальників в одну посилку для економії на доставці</p>
   </div>
   <div className='div93'>
    <img id='uy1' src="https://meest.cn/documents/7/stock-2.svg" alt="" />
    <h4 id='hh3'>Об'єднання $0,2/кг</h4>
    <p id='hh4'>Розділяємо посилку від постачальника на декілька для різних одержувачів або для уникнення перевищення порога митного ввезення</p>
   </div>
   <div className='div94'>
    <img id='uy1' src="https://meest.cn/documents/8/stock-3.svg" alt="" />
    <h4 id='hh3'>Відправити в один клік</h4>
    <p id='hh4'>Пересилаємо вам посилку безпосередньо від постачальника в тому вигляді, в якому прийшла: не звіряємо за кількістю, не перевіряємо на дефект, не об'єднуємо з іншими посилками</p>
   </div>

    </div>
   <div className='div90'>
    <div className='d100'>
  <img id='q1q' src="https://meest.cn/media/images/Frame_24.width-667.png" alt="" />
  </div>
  </div>
   
  
  </div>
  <div className='d110'>
     <button id='gh'>Детальніше</button>
  </div>
  <div className='div95'>
          <div className='div96'>
             <h3 id='w34'>Як це працює</h3>
             <div className='div98'>
              <img id='er6' src="https://meest.cn/media/images/Frame_25.2e16d0ba.fill-667x353.png" alt="" />
             </div>
             <a id='er7' href="">Детальна перевірка з фотозвітом в Китаї</a>
             </div>
          <div className='div97'>
<div className='div99'>
<img id='er6' src="https://meest.cn/media/images/Frame_26.2e16d0ba.fill-667x353.png" alt="" />
</div>
<a id='er7' href="">Об'єднувати товари в одну посилку легко</a>
          </div>
  </div>

  <div className='div100'>
    <div className='div101'>
    <h3 id='w35'>Події</h3>
    <div className='div103'>
      <img id='er6' src="https://meest.cn/media/images/d3e203f8-0d5a-47c2-a7d3-8c4d9fc019.2e16d0ba.fill-667x353.png" alt="" />
    </div>
    <a id='er8' href="">Зустріч з клієнтами Meest China</a>
    </div>
    <div className='div102'>
    <div className='div104'>
    <img id='er6' src="https://meest.cn/media/images/Meest_Banner_News_1600x847_wGalWJE.2e16d0ba.fill-667x353.jpg" alt="" />
    </div>
  <a id='er9' href="">Інтерв'ю на радіо "Перець" Експертний гість: Михайло Лимар – <br /> генеральний представник Meest China</a>
    </div>
  </div>



  <div className='div105'>
     <div className='div106'>
      <div className='div108'>
     <img id='er10' src="https://meest.cn/media/images/Meest_Banner_News_1600x847_3.2e16d0ba.fill-667x353.jpg" alt="" />
     </div>
   <a id='ww2' href="">Ольга Бафоєва: Бути керівником – означає знати про свою команду все</a>
     </div>
    


       <div className='div107'>
        <div className='div109'>
       <img id='er11' src="https://meest.cn/media/images/Meest_Banner_News_1600x847_2.2e16d0ba.fill-667x353.jpg" alt="" />
       </div>
       <a id='er13' href="">Ключові принципи успішного контакт-центру: побудова і структура <br /> Meest China</a>
       </div>
    

  </div>
  <div className='div110'>
    <div className='div111'>
      <div className='div113'>
          <h2 id='ee1'>Новий склад Meest China в <br /><p id='qhq1'>Китаї</p></h2>
         <p id='ff1'>Підтримуємо високі стандарти сервісу з інноваційним підходом до <br /> <p id='qhq2'>складських і логістичних процесів!</p></p>
         <img id='www2' src="https://meest.cn/media/images/296b713f-1208-4337-8ad9-df97c5de804f.original.png" alt="" />
      </div>
    </div>

         <div className='div112'>
         <div className='div114'>
         <h2 id='ee2'>Комерційні вантажі VS <br /> <p id='qhq3'>Послуги фрахту</p></h2>
         <p id='ff2' >ПОДКАСТ №3</p>
         <img className='www1' src="https://meest.cn/media/images/8405f7ce-0be3-443c-8dc6-fe4844ede6b5.original.jpg" alt="" />
</div>
         </div>

  </div>



  <div className='div115'>
  <div className='div118'>

    <div className='div116'>
      <p id='oo13'>Блог</p>
      <p id='oo14'>19 Березень 2024</p>
      <a id='oo15' href="">Що подарувати чоловікові на день народження </a>
      <p id='oo16' >Вибрати подарунок для чоловіка на день народження — не таке просте <br /> завдання. Асортимент магазинів здатний збити з пантелику своєю <br /> різноманітністю, тому потрібно орієнтуватися на кілька критеріїв: вік, <br /> захоплення, професія, інтереси, характер.</p>
    </div>
    <div className='div117'>
      <p id='oo17' >14 Березень 2024</p>
      <a id='oo18'  href="">Графік роботи служби підтримки комерційних <br /> вантажів 15 березня 2024 року </a>
      <p id='oo19' >Повідомляємо про зміни у робочому графіку служби підтримки <br /> комерційних відправлень. З 15 березня 2023 року служба підтримки</p>
      <button id='but340'>Всі публікації </button>
      <button id='fixedbtn'>tugma</button>
    </div>
  </div>
  <div className='div119'>
    <img id='img99' src="https://meest.cn/media/images/Frame_27.2e16d0ba.fill-667x412.png" alt="" />
    <p id='q12213'>Про Meest China</p>
  </div>
  </div>



  <div className='div120'>
     <div className='div121'>
      <h2 id='fd11'>Meest - надійна доставка товарів з Китаю</h2>
      <p>Китай - центр світової торгівлі. До цього дня товари «Made in China» продовжують користуватися високим <br />попитом в Україні та за її межами. І якщо раніше у деяких вони асоціювалися з сумнівною якістю, то <br />сьогодні більшість продукції з Китаю по праву належить до надійної і дуже практичної.</p>
      <p>В даний час товари з Китаю заполонили український ринок (і не тільки). Вони продовжують користуватися<br />високим попитом і все це завдяки привабливій вартості і широкій різноманітності. У наші дні можна <br />купити абсолютно будь-яку річ китайського виробництва, в тому числі і ту, яку більше ніде не знайдеш, </p>
      <img id='q1q1q' src="https://meest.cn/media/images/3.original.png" alt="" />
           </div>
  </div>
          </div>

          <div className='footer'> 
              <div className='div122'>

                <div className='div123'>

                 <ul id='wew1'>
                  <p>Доставка</p>
                  <li><a href="">Як купувати на Taobao</a></li>
                  <li><a href="">Як оформити доставку</a></li>
                  <li><a href="">Як пройти митницю</a></li>
                  <li><a href="">FAQ та поради</a></li>
                  <li><a href="">🔴Політика рекламації🔴</a></li>
                  
                 </ul>
                </div>
                <div className='div124'>

                <ul id='wew2'>
                  <p>Магазин</p>
                  <li><a href="">Як створити замовлення</a></li>
                  <li><a href="">Оплата замовлення</a></li>
                  <li><a href="">Скасування замовлення</a></li>
                  <li><a href="">Інструкція Таobao</a></li>
                  <li><a href="">Інструкція 1688</a></li>
                  <li><a href="">Інструкція Pinduoduo</a></li>
                  <li><a href="">Інструкція POIZON</a></li>
                 </ul>
                </div>
                <div className='div125'>
                <ul id='wew3'>
                  <p>Послуги</p>
                  <li><a href="">Оплата постачальнику</a></li>
                  <li><a href="">Доставка вантажів з інших країн в Україну</a></li>
                  <li><a href="">Фінансування імпортних операцій</a></li>
                  <li><a href="">Щоденний авіафрахт з Китаю до України та країн Євросоюзу</a></li>
                 
                 </ul>
                </div>
                <div className='div126'>
                <ul id='wew2'>
                  <p>Про Meest China</p>
                  <li><a href="">Про Meest China</a></li>
                  <li><a href="">Відгуки</a></li>
                  <li><a href="">Блог</a></li>
                  <li><a href="">Контакти</a></li>
                  <li><a href="">Публічна оферта</a></li>
                 </ul>
                </div>
                <div className='div127'>
                <ul id='wew4'>
                  <p>Служба підтримки</p>
                  <li><i>0 800 21 51 16</i></li>
                  <li><i>Пн - Нд з 09:00 до 21:00</i></li>
                  <li><a href="">support@info.meest.cn</a></li>
                
                 </ul>
                </div>
                <div className='div128'>
                <ul id='wew6'>
                  <p>Мобільний додаток</p>
                  <li><i>Доставка</i></li>
                <img src="https://meest.cn/static/svg/appStoreIconNew.svg" alt="" />
                <img src="https://meest.cn/static/svg/googlePlayIconNew.svg" alt="" /><br />
                <img src="https://meest.cn/static/svg/telegram.svg" alt="" />
                <img id='url' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMiMmcinfqBqYU8SLse209TanCpKBzBGpvw&usqp=CAU" alt="" />
                <br />
                <img  id='url1' src="data:image/png;base64,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" alt="" />
                <img id='url2' src="data:image/jpeg;base64,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" alt="" />
                 </ul>
                </div>

           
              </div>
              <div className='div129'>
              <div className='div130'>
                <p id='wew8'>District Court in Rzeszow, XII Department of Economics of the <br /> National Court Register KRS (National Court Register): 0000501663 </p>
                <p id='wew9'>©  2024  Meest Group. All rights reserved. </p>
              </div>
              <div className='div131'>
                <img src="https://meest.cn/static/svg/acquiring/mastercard-icon.svg" alt="" />
                <img src="https://meest.cn/static/svg/acquiring/visa-icon.svg" alt="" />
              </div>
            </div>
          </div>
          <button id='fixedbtn'>Мобільний додаток</button>
    </div>
  )
}