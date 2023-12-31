import React from 'react';
import "./RepairContent.css"
import {motion} from "framer-motion";

const RepairContent = () => {

    const repairLaptop = [
        {
            id:1,
            text:'Диагностика ноутбука',
            price:'0 руб.',
        },
        {
            id:2,
            text:'Доставка в сервисный центр',
            price:'0 руб.',
        },
        {
            id:3,
            text:'Гарантийный ремонт ноутбука',
            price:'Бесплатно',
        },
        {
            id:4,
            text:'Чистка ноутбука от пыли и грязи, замена термопасты',
            price:'от 750 руб.',
        },
        {
            id:5,
            text:'Замена матрицы (разбитого экрана)',
            price:'от 650 руб.',
        },
        {
            id:6,
            text:'Замена клавиатуры',
            price:'500 руб.',
        },
        {
            id:7,
            text:'Замена жесткого диска (HDD, SSD)',
            price:'350 руб.',
        },
        {
            id:8,
            text:'Замена оперативной памяти',
            price:'350 руб.',
        },
        {
            id:9,
            text:' Замена дисковода (DVD привода)',
            price:' от 500 руб.',
        },
        {
            id:10,
            text:'Ремонт материнской платы',
            price:'от 950 руб.',
        },
        {
            id:11,
            text:'Замена южного моста',
            price:'от 1800 руб.',
        },
        {
            id:12,
            text:'Замена северного моста',
            price:'от 1800 руб.',
        },
        {
            id:13,
            text:'Ремонт видеокарты, перепайка видеочипа, BGA-реболлинг',
            price:'от 1800 руб.',
        },
        {
            id:14,
            text:'Замена разъема питания, USB, Lan, HDMI, Audio jack, DVI, VGA',
            price:'от 550 руб.',
        },
        {
            id:15,
            text:'Замена процессора',
            price:'750 руб.',
        },
        {
            id:16,
            text:'Замена кулера системы охлаждения',
            price:'500 руб.',
        },

        {
            id:17,
            text:'Замена шлейфа на ноутбуке',
            price:'500 руб.',
        },
        {
            id:18,
            text:'Замена петель крышки экрана',
            price:'750 руб.',
        },
        {
            id:19,
            text:' Замена тачпада ноутбука',
            price:'500 руб.',
        },
        {
            id:20,
            text:' Замена аккумулятора ноутбука',
            price:'350 руб.',
        },
        {
            id:21,
            text:'Ремонт залитого ноутбука, химическая чистка клавиатуры',
            price:'от 950 руб.',
        },
        {
            id:22,
            text:'Замена дискретной видеокарты',
            price:'750 руб.',
        },
    ]

    const repairPK = [
        {
            id:1,
            text:' Сборка компьютера на заказ "под ключ"',
            price:'от 1800 руб.',
        },
        {
            id:2,
            text:'Сборка системного блока ПК из комплектующих заказчика',
            price:'от 1250 руб.',
        },
        {
            id:3,
            text:'Системные блоки конфигурации "Офисный ПК"',
            price:'от 10 000 руб.',
        },
        {
            id:4,
            text:'Системные блоки конфигурации "Игровой ПК"',
            price:'от 35 000 руб.',
        },
        {
            id:5,
            text:'Системные блоки конфигурации "Мультимедийный ПК (HTPC)"',
            price:'от 18 500 руб.',
        },
        {
            id:6,
            text:'Системные блоки конфигурации "Графическая станция"',
            price:'от 70 000 руб.',
        },
        {
            id:7,
            text:'Модернизация (апгрейд) системного блока ПК',
            price:'от 750 руб.',
        },
    ]

    const repairSystemPK = [
        {
            id:1,
            text:'Диагностика компьютера',
            price:'0 руб.',
        },
        {
            id:2,
            text:'Доставка в сервисный центр',
            price:'0 руб.',
        },
        {
            id:3,
            text:'Гарантийный ремонт компьютера',
            price:'Бесплатно',
        },
        {
            id:4,
            text:'Чистка системного блока от пыли и грязи (+ замена термопасты)',
            price:'950 руб.',
        },
        {
            id:5,
            text:'Установка (замена) видеокарты',
            price:'350 руб.',
        },
        {
            id:6,
            text:'Ремонт видеокарты',
            price:'350 руб.',
        },
        {
            id:7,
            text:'Установка (замена) блока питания',
            price:'350 руб.',
        },
        {
            id:8,
            text:'Ремонт компьютерного блока питания',
            price:'от 750 руб.',
        },
        {
            id:9,
            text:'Установка (замена) жесткого диска (HDD, SSD)',
            price:'350 руб.',
        },
        {
            id:10,
            text:'Ремонт жесткого диска',
            price:'от 750 руб.',
        },
        {
            id:11,
            text:' Установка (замена) модулей оперативной памяти',
            price:'350 руб.',
        },
        {
            id:12,
            text:' Установка (замена) дисковода (CD/DVD привода)',
            price:'350 руб.',
        },
        {
            id:13,
            text:'Установка (замена) материнской платы ПК',
            price:'450 руб.',
        },
        {
            id:14,
            text:'Ремонт материнской платы компьютера',
            price:'от 750 руб.',
        },
        {
            id:15,
            text:'Замена разъема USB, Lan, HDMI, Audio jack, VGA',
            price:'от 650 руб.',
        },
        {
            id:16,
            text:'Установка (замена) процессора (+ замена термопасты)',
            price:'650 руб.',
        },

        {
            id:17,
            text:'Скальпирование процессоров Intel',
            price:'от 1150 руб.',
        },
        {
            id:18,
            text:'Установка (замена) кулера системы охлаждения ЦП',
            price:'750 руб.',
        },
        {
            id:19,
            text:'Замена корпуса системного блока (перенос комплектующих)',
            price:'1250 руб.',
        },
        {
            id:20,
            text:'Перепрошивка, обновление BIOS (БИОС)',
            price:'750 руб.',
        },
    ]

    const repairTablet = [
        {
            id:1,
            text:'Диагностика планшета',
            price:'0 руб.',
        },
        {
            id:2,
            text:'Доставка в сервисный центр',
            price:'0 руб.',
        },
        {
            id:3,
            text:'Гарантийный ремонт планшета',
            price:'Бесплатно',
        },
        {
            id:4,
            text:'Замена передней, фронтальной камеры планшета',
            price:'от 750 руб.',
        },
        {
            id:5,
            text:'Замена основной задней камеры на планшете',
            price:'от 750 руб.',
        },
        {
            id:6,
            text:'Замена стекла экрана на планшете',
            price:'от 750 руб.',
        },
        {
            id:7,
            text:'Замена дисплея планшета',
            price:'от 750 руб.',
        },
        {
            id:8,
            text:'Замена аккумулятора, батареи планшета',
            price:'от 650 руб.',
        },
        {
            id:9,
            text:'Установка (замена) жесткого диска (HDD, SSD)',
            price:'350 руб.',
        },
        {
            id:10,
            text:'Замена динамика планшета',
            price:'от 500 руб.',
        },
        {
            id:11,
            text:'Замена микрофона в планшете',
            price:'от 500 руб.',
        },
        {
            id:12,
            text:'Замена кнопки громкости на планшете',
            price:'от 550 руб.',
        },
        {
            id:13,
            text:' Замена кнопки включения на планшете',
            price:'от 550 руб.',
        },
        {
            id:14,
            text:'Замена разъема зарядки на планшете',
            price:'от 750 руб.',
        },
        {
            id:15,
            text:'Замена аудио разъема планшета',
            price:'от 600 руб.',
        },
        {
            id:16,
            text:' Замена Wi-Fi модуля в планшете',
            price:'от 750 руб.',
        },

        {
            id:17,
            text:'Замена корпуса планшета',
            price:'от 850 руб.',
        },
        {
            id:18,
            text:'Замена тачскрина на планшете',
            price:'от 750 руб.',
        },
        {
            id:19,
            text:'Замена держателя сим карты в планшете',
            price:'от 500 руб.',
        },
        {
            id:20,
            text:'Ремонт планшета после попадания воды',
            price:'950 руб.',
        },
        {
            id:21,
            text:'Сброс пароля, разблокировка планшета',
            price:'от 650 руб.',
        },
        {
            id:22,
            text:'Перепрошивка, обновление, восстановление ПО',
            price:'от 750 руб.',
        },
        {
            id:23,
            text:'Переустановка ПО с сохранением данных',
            price:'от 900 руб.',
        },
    ]

    const repairPhone = [
        {
            id:1,
            text:'Диагностика сотового телефона или смартфона',
            price:'0 руб.',
        },
        {
            id:2,
            text:'Доставка в сервисный центр',
            price:'0 руб.',
        },
        {
            id:3,
            text:'Гарантийный ремонт телефона',
            price:'Бесплатно',
        },
        {
            id:4,
            text:'Замена передней, фронтальной камеры телефона',
            price:'от 900 руб.',
        },
        {
            id:5,
            text:'Замена основной задней камеры телефона',
            price:'от 900 руб.',
        },
        {
            id:6,
            text:'Замена стекла экрана на телефоне',
            price:'от 700 руб.',
        },
        {
            id:7,
            text:'Замена дисплея (тачскрина) телефона',
            price:'от 700 руб.',
        },
        {
            id:8,
            text:'Замена аккумулятора, батареи телефона',
            price:'от 650 руб.',
        },
        {
            id:9,
            text:'Замена динамика (слухового, разговорного) телефона',
            price:'500 руб.',
        },
        {
            id:10,
            text:'Замена микрофона телефона',
            price:'от 500 руб.',
        },
        {
            id:11,
            text:'Замена кнопки громкости на телефоне',
            price:'от 550 руб.',
        },
        {
            id:12,
            text:'Замена кнопки включения, блокировки телефона',
            price:'от 550 руб.',
        },
        {
            id:13,
            text:'Замена разъема, гнезда зарядки телефона',
            price:'от 750 руб.',
        },
        {
            id:14,
            text:'Замена корпуса, задней крышки',
            price:'от 750 руб.',
        },
        {
            id:15,
            text:' Ремонт телефона после воды',
            price:'от 850 руб.',
        },
        {
            id:16,
            text:'Сброс пароля, разблокировка телефона',
            price:'от 650 руб.',
        },

        {
            id:17,
            text:'Перепрошивка, обновление, восстановление ПО',
            price:'от 750 руб.',
        },
        {
            id:18,
            text:' Переустановка ПО с сохранением данных',
            price:'от 900 руб.',
        }
    ]

    const repairiPhone = [
        {
            id:1,
            text:'Диагностика iPhone',
            price:'0 руб.',
        },
        {
            id:2,
            text:'Выезд специалиста на дом или доставка устройства в СЦ',
            price:'0 руб.',
        },
        {
            id:3,
            text:'Гарантийный ремонт АйФон',
            price:'Бесплатно',
        },
        {
            id:4,
            text:'Замена дисплея iPhone',
            price:'от 3800 руб.',
        },
        {
            id:5,
            text:'Замена корпуса iPhone',
            price:'от 3750 руб.',
        },
        {
            id:6,
            text:'Замена кнопки HOME',
            price:'от 2250 руб.',
        },
        {
            id:7,
            text:'Замена кнопки вкл/выкл',
            price:'от 2550 руб.',
        },
        {
            id:8,
            text:'Замена аккумулятора iPhone',
            price:'от 2250 руб.',
        },
        {
            id:9,
            text:'Замена фронтальной, задней камеры на iPhone',
            price:'от 1750 руб.',
        },
        {
            id:10,
            text:'Программный ремонт iPhone',
            price:'от 650 руб.',
        }
    ]

    const repairiMac = [
        {
            id:1,
            text:'Диагностика iMac',
            price:'0 руб.',
        },
        {
            id:2,
            text:'Выезд специалиста на дом или доставка устройства в СЦ',
            price:'0 руб.',
        },
        {
            id:3,
            text:'Гарантийный ремонт iMac',
            price:'Бесплатно',
        },
        {
            id:4,
            text:'Чистка от пыли системы охлаждения + замена термопасты + смазка вентилятора',
            price:'от 2350 руб.',
        },
        {
            id:5,
            text:' Химическая чистка залитого iMac',
            price:'от 2750 руб.',
        },
        {
            id:6,
            text:'Чистка матрицы iMac',
            price:'от 2950 руб.',
        },
        {
            id:7,
            text:'Замена защитного стекла на iMac',
            price:'от 2450 руб.',
        },
        {
            id:8,
            text:'Замена LCD-матрицы экрана на iMac',
            price:'от 2650 руб.',
        },
        {
            id:9,
            text:'Замена подсветки на iMac',
            price:'от 3250 руб.',
        },
        {
            id:10,
            text:'Компонентный ремонт материнской платы iMac, BGA ремонт',
            price:'от 3650 руб.',
        },
        {
            id:11,
            text:' Замена материнской платы на iMac',
            price:'от 2850 руб.',
        },
        {
            id:12,
            text:'Замена материнской платы на iMac',
            price:'от 2850 руб.',
        },
        {
            id:13,
            text:'Ремонт видеокарты iMac',
            price:'от 4150 руб.',
        },
        {
            id:14,
            text:'Замена внутренних шлейфов в iMac',
            price:' от 1950 руб.',
        },
        {
            id:15,
            text:'Замена разъема USB, HDMI, Lightning, AUX на iMac',
            price:'от 2450 руб.',
        },
        {
            id:16,
            text:'Замена блока питания iMac',
            price:'от 2650 руб.',
        },

        {
            id:17,
            text:'Замена дисковода DVD±RW SuperDrive на iMac',
            price:'от 2150 руб.',
        },
        {
            id:18,
            text:'Замена кулера системы охлаждения iMac',
            price:'от 1450 руб.',
        },
        {
            id:19,
            text:'Замена оперативной памяти на iMac',
            price:'от 1450 руб.',
        },
        {
            id:20,
            text:'Замена оперативной памяти на iMac',
            price:'от 1250 руб.',
        },
        {
            id:21,
            text:'Замена жесткого диска HDD на iMac',
            price:'от 1550 руб.',
        },
        {
            id:22,
            text:'Замена жесткого диска SSD в iMac',
            price:'от 1550 руб.',
        },
        {
            id:23,
            text:'Ремонт или замена корпуса iMac',
            price:'от 3450 руб.',
        },
        {
            id:24,
            text:'Переустановка операционной системы Mac OS X с сохранением данных',
            price:'от 1250 руб.',
        },
        {
            id:25,
            text:' Установка драйверов, программ и утилит на iMac',
            price:'от 350 руб.',
        },
        {
            id:26,
            text:' Установка Windows на iMac вместо Mac OS X',
            price:' от 1250 руб.',
        },
        {
            id:27,
            text:'Удаление вирусов + установка антивируса на iMac',
            price:'от 950 руб.',
        },
        {
            id:28,
            text:'Восстановление данных на iMac',
            price:'от 950 руб.',
        },
        {
            id:29,
            text:'Восстановление пароля пользователя iMac',
            price:'от 950 руб.',
        },
        {
            id:30,
            text:'Настройка интернета и подключение iMac к Wi-Fi',
            price:'от 950 руб.',
        },
    ]

    const repairPO = [
        {
            id:1,
            text:'Предустановка операционной системы Windows на ПК или ноутбук',
            price:'650 руб.',
        },
        {
            id:2,
            text:' Установка Windows 7 вместо Windows 11/10/8.1 на ноутбуке или ПК',
            price:'650 руб.',
        },
        {
            id:3,
            text:'Переустановка Windows 11/10/7 на PC или MacBook, Mac, iMac',
            price:'от 750 руб.',
        },
        {
            id:4,
            text:'Настройка, оптимизация операционной системы',
            price:'650 руб.',
        },
        {
            id:5,
            text:'Установка драйверов устройств',
            price:' от 150 руб.',
        },
        {
            id:6,
            text:'Установка программ (медиаплеер, скайп, браузер и пр.)',
            price:'250 руб.',
        },
        {
            id:7,
            text:'Установка Microsoft Office, LibreOffice, OpenOffice',
            price:'450 руб.',
        },
        {
            id:8,
            text:'Установка антивирусной программы',
            price:'550 руб.',
        },
        {
            id:9,
            text:'Создание резервной копии (образа системы)',
            price:'от 450 руб.',
        },
        {
            id:10,
            text:' Восстановление удаленных данных с поврежденного носителя',
            price:'от 500 руб.',
        },
        {
            id:11,
            text:'Восстановление файловой структуры жесткого диска',
            price:'450 руб.',
        },
        {
            id:12,
            text:'Форматирование, создание разделов на HDD или SSD',
            price:'450 руб.',
        },
        {
            id:13,
            text:'Конвертирование жесткого диска из GPT в MBR',
            price:'350 руб.',
        },
        {
            id:14,
            text:' Чистка системы от мусорных файлов и ошибок',
            price:'450 руб.',
        },
        {
            id:15,
            text:'Настройка параметров BIOS (БИОСа)',
            price:'от 250 руб.',
        },
        {
            id:16,
            text:'Удаление вирусов с компьютера или ноутбука',
            price:'550 руб.',
        },

        {
            id:17,
            text:'Лечение от вирусов планшета или телефона Андроид',
            price:'550 руб.',
        },
        {
            id:18,
            text:'Удаление смс-вируса баннера без переустановки системы',
            price:'550 руб.',
        },
        {
            id:19,
            text:'Очистка USB флешки или карты памяти от вирусов',
            price:'450 руб.',
        },
        {
            id:20,
            text:'Расшифровка файлов, испорченных троянами-шифровальщиками',
            price:'от 750 руб.',
        },
        {
            id:21,
            text:'Убрать навязчивую рекламу из браузеров + настройка и установка блокировщика рекламы',
            price:'500 руб.',
        },
        {
            id:22,
            text:'Восстановление загрузочного сектора Windows',
            price:'450 руб.',
        },
        {
            id:23,
            text:'Установка антивируса платного Kaspersky, NOD32, Dr.Web и др.',
            price:'550 руб.',
        },
        {
            id:24,
            text:'Лечение от вирусов и установка антивируса через удаленный доступ с помощью TeamViewer',
            price:'от 450 руб.',
        }
    ]

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
                        Цены на ремонт и обслуживание <span className="color">компьютерной техники</span>
                    </h2>
                </div>

                <div className="container__content-text">
                    <p className="text__content">
                        Развитие компьютерной техники и технологий в нашей стране достигло достаточно высокого уровня, следствием чего стало увеличение спроса на
                        услуги по ремонту компьютерной техники. Наш сервис-центр «Megatech» предлагает своим клиентам услуги именно
                        в данном направлении.
                    </p>
                    <p className="text__content">
                        В отличие от наших конкурентов мы предлагаем достаточно демократичные цены за качественное исполнение наших услуг. Обратившись к нам за помощью в решении проблем, связанных с ремонтом офисной техники,
                        компьютеров, ноутбуков, игровых приставок, мониторов, вы можете быть уверены, что наши мастера обязательно вам помогут!
                    </p>
                    <p className="text__content">
                        Полный прайс лист услуг по сервисному обслуживанию компьютерной техники в сервисном центре Megatech.
                    </p>

                    <h3 className="title__content-information">
                        Цены на ремонт ноутбуков
                    </h3>
                    <table className="table__price">
                        <thead className="table__title">
                            <th className="table__title-first">
                                Вид работ:
                            </th>
                            <th className="table__title-last">
                                Цена:
                            </th>
                        </thead>
                        <tbody className="body__table">
                        {
                            repairLaptop.map(item => {
                                return (
                                    <tr key={item.id} className="table__row">
                                        <th className="table__row-first">
                                            {item.text}
                                        </th>
                                        <th className="table__row-last">
                                            {item.price}
                                        </th>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>

                    <h3 className="title__content-information">
                        Цены на сборку компьютеров / Стоимость готовых системных блоков
                    </h3>
                    <table className="table__price">
                        <thead className="table__title">
                        <th className="table__title-first">
                            Вид работ:
                        </th>
                        <th className="table__title-last">
                            Цена:
                        </th>
                        </thead>
                        <tbody className="body__table">
                        {
                            repairPK.map(item => {
                                return (
                                    <tr key={item.id} className="table__row">
                                        <th className="table__row-first">
                                            {item.text}
                                        </th>
                                        <th className="table__row-last">
                                            {item.price}
                                        </th>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>

                    <h3 className="title__content-information">
                        Цены на ремонт персональных компьютеров
                    </h3>
                    <table className="table__price">
                        <thead className="table__title">
                        <th className="table__title-first">
                            Вид работ:
                        </th>
                        <th className="table__title-last">
                            Цена:
                        </th>
                        </thead>
                        <tbody className="body__table">
                        {
                            repairSystemPK.map(item => {
                                return (
                                    <tr key={item.id} className="table__row">
                                        <th className="table__row-first">
                                            {item.text}
                                        </th>
                                        <th className="table__row-last">
                                            {item.price}
                                        </th>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>

                    <h3 className="title__content-information">
                        Цены на ремонт планшетов
                    </h3>
                    <table className="table__price">
                        <thead className="table__title">
                        <th className="table__title-first">
                            Вид работ:
                        </th>
                        <th className="table__title-last">
                            Цена:
                        </th>
                        </thead>
                        <tbody className="body__table">
                        {
                            repairTablet.map(item => {
                                return (
                                    <tr key={item.id} className="table__row">
                                        <th className="table__row-first">
                                            {item.text}
                                        </th>
                                        <th className="table__row-last">
                                            {item.price}
                                        </th>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>

                    <h3 className="title__content-information">
                        Цены на ремонт сотовых телефонов и смартфонов
                    </h3>
                    <table className="table__price">
                        <thead className="table__title">
                        <th className="table__title-first">
                            Вид работ:
                        </th>
                        <th className="table__title-last">
                            Цена:
                        </th>
                        </thead>
                        <tbody className="body__table">
                        {
                            repairPhone.map(item => {
                                return (
                                    <tr key={item.id} className="table__row">
                                        <th className="table__row-first">
                                            {item.text}
                                        </th>
                                        <th className="table__row-last">
                                            {item.price}
                                        </th>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>

                    <h3 className="title__content-information">
                        Цены на ремонт iPhone
                    </h3>
                    <table className="table__price">
                        <thead className="table__title">
                        <th className="table__title-first">
                            Вид работ:
                        </th>
                        <th className="table__title-last">
                            Цена:
                        </th>
                        </thead>
                        <tbody className="body__table">
                        {
                            repairiPhone.map(item => {
                                return (
                                    <tr key={item.id} className="table__row">
                                        <th className="table__row-first">
                                            {item.text}
                                        </th>
                                        <th className="table__row-last">
                                            {item.price}
                                        </th>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>

                    <h3 className="title__content-information">
                        Цены на ремонт iMac
                    </h3>
                    <table className="table__price">
                        <thead className="table__title">
                        <th className="table__title-first">
                            Вид работ:
                        </th>
                        <th className="table__title-last">
                            Цена:
                        </th>
                        </thead>
                        <tbody className="body__table">
                        {
                            repairiMac.map(item => {
                                return (
                                    <tr key={item.id} className="table__row">
                                        <th className="table__row-first">
                                            {item.text}
                                        </th>
                                        <th className="table__row-last">
                                            {item.price}
                                        </th>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>

                    <h3 className="title__content-information">
                        Цены на работу с программным обеспечением
                    </h3>
                    <table className="table__price">
                        <thead className="table__title">
                        <th className="table__title-first">
                            Вид работ:
                        </th>
                        <th className="table__title-last">
                            Цена:
                        </th>
                        </thead>
                        <tbody className="body__table">
                        {
                            repairPO.map(item => {
                                return (
                                    <tr key={item.id} className="table__row">
                                        <th className="table__row-first">
                                            {item.text}
                                        </th>
                                        <th className="table__row-last">
                                            {item.price}
                                        </th>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
};

export default RepairContent;