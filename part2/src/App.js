import { Middle, Top } from './components';
import { Bottom } from './components';
import './App.css';
import icon from './baseline_grid_view_black_24dp.png'


const links = [
  {
    name: 'Сейчас в СМИ',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input'
  },
  {
    name: 'в Германии',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input'
  },
  {
    name: 'Рекомандуем',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input'
  }
]

const smallLinks = [
  {
    name: 'Видео',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input'
  },
  {
    name: 'Картинки',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input'
  },
  {
    name: 'Новости',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input'
  },
  {
    name: 'Карты',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input'
  },
  {
    name: 'Маркет',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input'
  },
  {
    name: 'Переводчик',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input'
  },
  {
    name: 'Эфир',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input'
  },
  {
    name: 'ещё',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input'
  },
  
]


const add =
[
  {
  icon: icon,
  name: 'Работа над ошибками',
  link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input',
  text: 'Смотрите на яндексе и запоминайте'
}
]

const news =
[
  {
  icon: icon,
  text: 'Путин упростил .....'
},
{
icon: icon,
text: 'В команде Зеленского....'
},
{
  icon: icon,
  text: '"Турпомощь" прокомментировала ....'
},
{
  icon: icon,
  text: 'Суд закрыл дело .....'
},
{
  icon: icon,
  text: 'На Украине призвали.....'
},
]

const curr =[
  {
    name: "USD MOEX",
    value: "63,52",
    changed:'+0,9'

  },
  {
    name: "EUR MOEX",
    value: "70,52",
    changed:'+0,5'

  }
  ,
  {
    name: "НЕФТЬ",
    value: "64,52",
    changed:'+1,54%'

  }

]
const wth =[
  {
    icon:icon ,
    num: '+17',
    descript: "Утром +17, днём +20"
  }
]

const pop =[
  {
  name: 'Недвижимость',
  about: 'о сталинках'
},{
  name: 'Маркет',
  about: 'люстры и светильники'
},{
  name: 'Авто.ру',
  about: 'привод 4 до 500 000'
},
]
const map =[{
  text: 'Карта'
}]
const tv =[{
  name: 'THT.Best',
  time: '02:00',
  chanel: 'THT Internationa'
},
{name: 'Джинглки',
  time: '02:15',
  chanel: 'Карусель'
},
{name: 'Наедине со всеми',
time: '02:25',
chanel: 'Первый'
},
]

const online =[
  {
  name: 'Управление как искусство',
  about: 'Успех',
},
{
  name: 'Ночь.Мир в это время',
  about: 'earthTV',
},{
  name: 'Андрей Возн..',
  about: 'Совершенно секретно',
},
]


function App() {
  return (
    <div className="yand">
     <Top news={news} curr={curr} add={add} links={links} className="top"/>
     <Middle className="middle" yandex='https://avatars.mds.yandex.net/get-lpc/1520633/ef2a27b6-800c-4a83-a864-192193c41b38/orig}' text='фазы луны'
     links={smallLinks} image='https://vizhivaika.ru/images/users/473/wild.png'/>
     <Bottom className="bottom" weather ={wth} popular ={pop} map={map} tv={tv} online={online}/>
    </div>
  );
}

export default App;
