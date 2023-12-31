import React from 'react';
import "./RemoteContent.css"
import {motion} from "framer-motion";

const RemoteContent = () => {
    return (
        <div className="section">
            <motion.div className="container__content"
                 animate={{
                     x:[-100,0]
                 }}
                 initial={{ opacity: 0 }}
                 viewport={{ once: true }}
                 whileInView={{ opacity: 1 }}
                 transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
            >
                <div className="container-title_content">
                    <h2 className="title__content">
                        Удаленная компьютерная помощь <span className="color">через Интернет</span>
                    </h2>
                </div>
                <div className="container__content-text">
                    <p className="text__content">
                        Удаленная (дистанционная) компьютерная помощь через Интернет сейчас, как никогда,
                        актуальна в связи с такой ситуацией в мире.
                    </p>
                    <p className="text__content">
                        СЦ «Megatech.ru» предлагает воспользоваться профессиональным компьютерным
                        сервисом по удаленке.
                    </p>
                    <h3 className="title__content-information">
                        Преимущества помощи через Интернет:
                    </h3>
                    <ul className="list__content">
                        <li className="item__content">
                            - Оказание помощи вашему компьютеру 24 часа в сутки 7 дней в неделю
                        </li>
                        <li className="item__content">
                            - Решение большинства программных проблем с ПК в течение 1 часа
                        </li>
                        <li className="item__content">
                            - Фиксированные доступные цены на дистанционную помощь и поддержку
                        </li>
                        <li className="item__content">
                            - Возможность обучения работы с компьютером онлайн по скайпу
                        </li>
                        <li className="item__content">
                            - Дальнейшая бесплатная техническая поддержка пользователей
                        </li>
                    </ul>
                    <h3 className="title__content-information">
                        Удаленная помощь с компьютером
                    </h3>
                    <p className="text__content">
                        Удаленная помощь с компьютером – это значит, что поддержка пользователю будет оказана в самые кратчайшие сроки. Как правило, для решения большинства проблем с компьютерной техникой, не требующих выезда мастера на дом, потребуется не более 30 мин.-1 часа времени.
                    </p>
                    <p className="text__content">
                        <span className="color">Мастер-компьютерщик</span> нашей компании сможет удаленно выполнить для Вас следующие компьютерные услуги:
                    </p>
                    <ul className="list__content">
                        <li className="item__content">
                            - Настройка ПК удаленно (Windows 11/10/7, Linux, Mac OS X)
                        </li>
                        <li className="item__content">
                            - Установка различных программ и драйверов устройств
                        </li>
                        <li className="item__content">
                            - Установка Майкрософт Офис и др. офисных пакетов
                        </li>
                        <li className="item__content">
                            - Сетевое подключение принтера, отладка сети
                        </li>
                        <li className="item__content">
                            - Консультации по использованию компьютера
                        </li>
                        <li className="item__content">
                            - Онлайн-обучение пользователей PC
                        </li>
                    </ul>
                    <h3 className="title__content-information">
                        Сколько стоит удаленная компьютерная помощь
                    </h3>
                    <p className="text__content">
                        Преимущества удаленной компьютерной помощи через Интернет в очень доступных ценах. <span className="color">Один час работы специалиста стоит всего 500-700 рублей</span>, в зависимости от сложности поставленных задач.
                    </p>
                    <h3 className="title__content-information">
                        Нужен онлайн-ремонт компьютера? Схема работы
                    </h3>
                    <ul className="list__remote">
                        <li className="item__content">
                            - <span className="color">Вы оставляете заявку</span> по тел. 8 (499) 707-28-01 или на сайте через контактную форму
                        </li>
                        <li className="item__content">
                            - <span className="color">Мы связываемся с Вами</span> для проведения необходимых работ
                        </li>
                        <li className="item__content">
                            - <span className="color">Мастер выполняет работы </span>(через программу удаленного доступа Team Viewer)
                        </li>
                        <li className="item__content">
                            - <span className="color">Вы принимаете работу и производите оплату</span> любым удобным Вам способом
                        </li>
                    </ul>
                    <p className="text__content">
                        Компьютерная помощь по удаленке — это быстро, удобно и недорого!
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default RemoteContent;