import React from 'react';
import local from '../assets/local_mall.png'
import close from '../assets/clouse.png'
import dot from '../assets/dot.png'
import solar from '../assets/solar.png'
import axid from '../assets/axid.png'
import present from '../assets/present.png'
import stars from '../assets/five_stars.png'

function Modal_basket(props) {
    return (
        <div>

<div className='modal_header'>
<h1 className='bag_header'>ТВОЯ СУМКА <img src={local} alt="" /> </h1>



<div className='clouse_div'><img src={close} alt="" /></div>





</div>

<div>
< hr className='hr_line' />
</div>

<div className='order_ds'>
    <p className='orders'>ваш заказ прошел квалификацию для <br /> бесплатной доставки</p>
    <p className='buy'>купить все</p>
</div>


<div>
{/* <img className='dot' src={dot} alt="" /> */}
    <  hr className='hrr_line' /> 
</div>


<div className='recommend'>
    <h2 className='rec'>РЕКОМЕНДУЕМЫЕ</h2>
</div>

<div>
    <  hr className='hr_line' />
    
</div>


<div className='solor_products'>


<div className='soloration'>
<p className='solor'>
добавить в корзину

</p>









</div>






<div className='axidition'>
    <p className='axid'>
    быстрый магазин
    </p>


  

</div>

<div className='presentation'>
    <p className='present'>быстрый магазин</p>



</div>

</div>

<div className='stario'>
<div className='five_star'>
    <li className='li_star'><img src={stars} alt="" /></li>
    <li className='li_star'>сыворотка Solar Power <br /> SPF 30</li>
    <li className='li_star'>4020с</li>
</div>

<div className='four_star'>
    <li className='li_star'><img src={stars} alt="" /></li>
    <li className='li_star'>очищающий бальзам с <br /> гиалуровоной кислотой</li>
    <li className='li_star'>5630с</li>
</div>



<div className='three_star'>
    <li className='li_star'><img src={stars} alt="" /></li>
    <li className='li_star'>подарочный набор</li>
    <li className='li_star'>19 570с</li>
</div>



</div>
<div>
    <  hr className='hr_line' />
    
</div>




<div className='check_button'>
    
    <button className='item_check'> <p className='price_check'>3900c</p> Проверить</button  > 
</div>


    <p className='continue_footer'>продолжить покупки</p>











       
           

         
        </div>
    );
}

export default Modal_basket;