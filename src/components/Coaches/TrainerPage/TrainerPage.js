import './TrainerPage.css';
import ash from '../../../images/Ash_anime_Journeys 2.svg';
import pokemon from '../../../images/history.svg';
import fight from '../../../images/historyFight.svg';
import downloadFight from '../../../images/download.svg';
import copy from '../../../images/copy.svg';
import buttonBack from '../../../images/button-mobile-back.svg';


function TrainerPage() {
    return (
        <section className="ash">
            <div className='ash__wrapper'>
            <button className='ash__button-back-mobile'><img src={buttonBack}></img></button>
            <button className='ash__button-back'><span>Назад</span></button>
                <div className='ash__content-left'>
                    <img className='ash__img' src={ash} alt='ash'/>
                </div>
                <div className='ash__content-right'>
                    <h3 className='ash__title'>Тренер</h3>
                    <h3 className='ash__title-descr'>Эш</h3>
                    <div className='ash__characteristic'>
                        <div className='ash__characteristic_descr-inner'>
                            <div className='ash__characteristic_descr'><span className='text-opacity'>ID тренера</span></div>
                            <div className='ash__characteristic_descr'><span className='text-opacity'>Город</span></div>
                            <div className='ash__characteristic_descr'><span className='text-opacity'>Уровень</span></div>
                            <div className='ash__characteristic_descr'><span className='text-opacity'>Покемоны</span></div>
                        </div>
                        <div className='ash__characteristic_val-inner'>
                            <div className='ash__characteristic_val'>1001<img className='ash__characteristic_val-copy' src={copy}/></div>
                            <div className='ash__characteristic_val'>Токио</div>
                            <div className='ash__characteristic_val'><div className='ash__characteristic_val-number'>4</div>
                                <div className='ash__characteristic_val-progress'>
                                    <div className='ash__characteristic_val-progress_elem'></div>
                                    <div className='ash__characteristic_val-progress_elem'></div>
                                    <div className='ash__characteristic_val-progress_elem'></div>
                                    <div className='ash__characteristic_val-progress_elem'></div>
                                    <div className='ash__characteristic_val-progress_elem'></div>
                                </div>
                            </div>
                            <div className='ash__characteristic_val'><div className='ash__characteristic_val-number'>4</div>
                            <div className='ash__characteristic_val-progress'>
                                    <div className='ash__characteristic_val-progress_elem'></div>
                                    <div className='ash__characteristic_val-progress_elem'></div>
                                    <div className='ash__characteristic_val-progress_elem'></div>
                                    <div className='ash__characteristic_val-progress_elem'></div>
                                    <div className='ash__characteristic_val-progress_elem'></div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='ash__pokemon-history'>
                        <img className='ash__pokemon-history-img' src={pokemon}/><span>Покемоны</span><span className='history-text'>4</span>
                    </div>
                    <div className='ash__fight-history'>
                        <img className='ash__fight-history-img' src={fight}/><span>История боёв</span><span className='history-text'>6</span>
                    </div>
                    <div className='ash__export-fight-history'>
                        <img className='ash__export-fight-history-img' src={downloadFight} />
                        <div className='span__inner'>
                            <span>Экспорт истории боев</span>
                            <span className='text-small'>Файл можно скачать</span>
                        </div>
                        <button className='ash__export-fight-history__button'>Скачать</button>
                    </div>
                </div>
                <button className='ash__button-exit-mobile'>Выйти</button>
            </div>
        </section>
    )
}

export default TrainerPage;

