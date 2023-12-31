import React from 'react';
import {motion} from "framer-motion";
import PhoneMaster from "../PhoneMaster/PhoneMaster";

const OrganizationsContent = () => {
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
                        Компьютерные услуги для организаций <span className="color">г. Москвы</span>
                    </h2>
                </div>
                <div className="container__content-text">
                    <p className="text__content">
                        Компания <span className="color">«Megatech»</span> предлагает организациям города Москвы и МО услуги по ремонту и абонентскому обслуживанию различной компьютерной техники. Мы предоставляем как разовые услуги системного администратора и ремонт, так и ежемесячное абонентское обслуживание компьютеров организаций.
                    </p>
                    <p className="text__content">
                        Поможем с правильной организацией рабочего места в офисе за компьютером и наладим всю инфраструктуру в соответствии со всеми требованиями.
                    </p>
                    <h3 className="title__content-information">
                        Предлагаем следующие компьютерные услуги:
                    </h3>
                    <ul className="list__remote">
                        <li className="item__content">
                            - Абонентское обслуживание компьютерной техники;
                        </li>
                        <li className="item__content">
                            - Ремонт и настройка офисной техники;
                        </li>
                        <li className="item__content">
                            - Разовый оптовый ремонт компьютерной техники;
                        </li>
                        <li className="item__content">
                            - Ремонт сетевого оборудования и серверов;
                        </li>
                        <li className="item__content">
                            - Сборка ПК и серверов любой конфигурации;
                        </li>
                        <li className="item__content">
                            - ИТ-аутсорсинг, удаленное сопровождение и обслуживание серверов
                        </li>
                        <li className="item__content">
                            - Услуги приходящего системного администратора
                        </li>
                    </ul>
                    <PhoneMaster/>
                </div>
            </motion.div>
        </div>
    );
};

export default OrganizationsContent;