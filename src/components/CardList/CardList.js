import React from 'react';
import pokemon1 from '../../images/pokemon-1.jpg';
import pokemon2 from '../../images/pokemon-2.jpg';
import pokemon3 from '../../images/pokemon-3.jpg';
import pokemon4 from '../../images/pokemon-4.jpg';
import pokemon5 from '../../images/pokemon-5.jpg';
import pokemon6 from '../../images/pokemon-6.jpg';
import pokemon7 from '../../images/pokemon-7.jpg';
import pokemon8 from '../../images/pokemon-8.jpg';
import legend from '../../images/img-legend.svg';
import delLegend from '../../images/del-legend.svg';

import './CardList.css';

function CardList() {
    return (
        <section className="cards">
                <ul className="card-list ">
                    <li className="card card_type_legend">
                        <div className="card__content">
                            <img className="card__img" src={pokemon1} alt="Жестезавр" />
                            <div className="card__container">
                                <h2 className="card__title">Жестезавр
                                    <img className="card__title-img-legend" src={legend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_pokemonbol"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon2} alt="Пукапука" />
                            <div className="card__container">
                                <h2 className="card__title">Пукапука</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon3} alt="Бульбазавр" />
                            <div className="card__container">
                                <h2 className="card__title">Бульбазавр</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={true} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon4} alt="Бульби" />
                            <div className="card__container">
                                <h2 className="card__title">Бульби</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card_type_legend card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon5} alt="ОаОаОаОа" />
                            <div className="card__container">
                                <h2 className="card__title ">ОаОаОаОа
                                    <img className="card__title-img-legend" src={delLegend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack  card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon6} alt="Кроконав" />
                            <div className="card__container">
                                <h2 className="card__title">Кроконав</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_1"><p>Атака 1</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon7} alt="Пальцеукозавр11..." />
                            <div className="card__container">
                                <h2 className="card__title">Пальцеукозавр11...</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon8} alt="Лукозвр69" />
                            <div className="card__container">
                                <h2 className="card__title">Лукозвр69</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon8} alt="Лукозвр69" />
                            <div className="card__container">
                                <h2 className="card__title">Лукозвр69</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card_type_legend">
                        <div className="card__content">
                            <img className="card__img" src={pokemon1} alt="Жестезавр" />
                            <div className="card__container">
                                <h2 className="card__title">Жестезавр
                                    <img className="card__title-img-legend" src={legend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_pokemonbol"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon2} alt="Пукапука" />
                            <div className="card__container">
                                <h2 className="card__title">Пукапука</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon3} alt="Бульбазавр" />
                            <div className="card__container">
                                <h2 className="card__title">Бульбазавр</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={true} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="card card_type_legend">
                        <div className="card__content">
                            <img className="card__img" src={pokemon1} alt="Жестезавр" />
                            <div className="card__container">
                                <h2 className="card__title">Жестезавр
                                    <img className="card__title-img-legend" src={legend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_pokemonbol"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon2} alt="Пукапука" />
                            <div className="card__container">
                                <h2 className="card__title">Пукапука</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon3} alt="Бульбазавр" />
                            <div className="card__container">
                                <h2 className="card__title">Бульбазавр</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={true} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon4} alt="Бульби" />
                            <div className="card__container">
                                <h2 className="card__title">Бульби</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card_type_legend card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon5} alt="ОаОаОаОа" />
                            <div className="card__container">
                                <h2 className="card__title ">ОаОаОаОа
                                    <img className="card__title-img-legend" src={delLegend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack  card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon6} alt="Кроконав" />
                            <div className="card__container">
                                <h2 className="card__title">Кроконав</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_1"><p>Атака 1</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon7} alt="Пальцеукозавр11..." />
                            <div className="card__container">
                                <h2 className="card__title">Пальцеукозавр11...</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon8} alt="Лукозвр69" />
                            <div className="card__container">
                                <h2 className="card__title">Лукозвр69</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon8} alt="Лукозвр69" />
                            <div className="card__container">
                                <h2 className="card__title">Лукозвр69</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card_type_legend">
                        <div className="card__content">
                            <img className="card__img" src={pokemon1} alt="Жестезавр" />
                            <div className="card__container">
                                <h2 className="card__title">Жестезавр
                                    <img className="card__title-img-legend" src={legend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_pokemonbol"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon2} alt="Пукапука" />
                            <div className="card__container">
                                <h2 className="card__title">Пукапука</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon3} alt="Бульбазавр" />
                            <div className="card__container">
                                <h2 className="card__title">Бульбазавр</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={true} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="card card_type_legend">
                        <div className="card__content">
                            <img className="card__img" src={pokemon1} alt="Жестезавр" />
                            <div className="card__container">
                                <h2 className="card__title">Жестезавр
                                    <img className="card__title-img-legend" src={legend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_pokemonbol"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon2} alt="Пукапука" />
                            <div className="card__container">
                                <h2 className="card__title">Пукапука</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon3} alt="Бульбазавр" />
                            <div className="card__container">
                                <h2 className="card__title">Бульбазавр</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={true} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon4} alt="Бульби" />
                            <div className="card__container">
                                <h2 className="card__title">Бульби</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card_type_legend card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon5} alt="ОаОаОаОа" />
                            <div className="card__container">
                                <h2 className="card__title ">ОаОаОаОа
                                    <img className="card__title-img-legend" src={delLegend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack  card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon6} alt="Кроконав" />
                            <div className="card__container">
                                <h2 className="card__title">Кроконав</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_1"><p>Атака 1</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon7} alt="Пальцеукозавр11..." />
                            <div className="card__container">
                                <h2 className="card__title">Пальцеукозавр11...</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon8} alt="Лукозвр69" />
                            <div className="card__container">
                                <h2 className="card__title">Лукозвр69</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon8} alt="Лукозвр69" />
                            <div className="card__container">
                                <h2 className="card__title">Лукозвр69</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card_type_legend">
                        <div className="card__content">
                            <img className="card__img" src={pokemon1} alt="Жестезавр" />
                            <div className="card__container">
                                <h2 className="card__title">Жестезавр
                                    <img className="card__title-img-legend" src={legend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_pokemonbol"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon2} alt="Пукапука" />
                            <div className="card__container">
                                <h2 className="card__title">Пукапука</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon3} alt="Бульбазавр" />
                            <div className="card__container">
                                <h2 className="card__title">Бульбазавр</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={true} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="card card_type_legend">
                        <div className="card__content">
                            <img className="card__img" src={pokemon1} alt="Жестезавр" />
                            <div className="card__container">
                                <h2 className="card__title">Жестезавр
                                    <img className="card__title-img-legend" src={legend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_pokemonbol"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon2} alt="Пукапука" />
                            <div className="card__container">
                                <h2 className="card__title">Пукапука</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon3} alt="Бульбазавр" />
                            <div className="card__container">
                                <h2 className="card__title">Бульбазавр</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={true} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon4} alt="Бульби" />
                            <div className="card__container">
                                <h2 className="card__title">Бульби</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card_type_legend card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon5} alt="ОаОаОаОа" />
                            <div className="card__container">
                                <h2 className="card__title ">ОаОаОаОа
                                    <img className="card__title-img-legend" src={delLegend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack  card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon6} alt="Кроконав" />
                            <div className="card__container">
                                <h2 className="card__title">Кроконав</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_1"><p>Атака 1</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon7} alt="Пальцеукозавр11..." />
                            <div className="card__container">
                                <h2 className="card__title">Пальцеукозавр11...</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon8} alt="Лукозвр69" />
                            <div className="card__container">
                                <h2 className="card__title">Лукозвр69</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon8} alt="Лукозвр69" />
                            <div className="card__container">
                                <h2 className="card__title">Лукозвр69</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card_type_legend">
                        <div className="card__content">
                            <img className="card__img" src={pokemon1} alt="Жестезавр" />
                            <div className="card__container">
                                <h2 className="card__title">Жестезавр
                                    <img className="card__title-img-legend" src={legend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_pokemonbol"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon2} alt="Пукапука" />
                            <div className="card__container">
                                <h2 className="card__title">Пукапука</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon3} alt="Бульбазавр" />
                            <div className="card__container">
                                <h2 className="card__title">Бульбазавр</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={true} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="card card_type_legend">
                        <div className="card__content">
                            <img className="card__img" src={pokemon1} alt="Жестезавр" />
                            <div className="card__container">
                                <h2 className="card__title">Жестезавр
                                    <img className="card__title-img-legend" src={legend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_pokemonbol"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon2} alt="Пукапука" />
                            <div className="card__container">
                                <h2 className="card__title">Пукапука</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon3} alt="Бульбазавр" />
                            <div className="card__container">
                                <h2 className="card__title">Бульбазавр</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={true} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon4} alt="Бульби" />
                            <div className="card__container">
                                <h2 className="card__title">Бульби</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card_type_legend card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon5} alt="ОаОаОаОа" />
                            <div className="card__container">
                                <h2 className="card__title ">ОаОаОаОа
                                    <img className="card__title-img-legend" src={delLegend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack  card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon6} alt="Кроконав" />
                            <div className="card__container">
                                <h2 className="card__title">Кроконав</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_1"><p>Атака 1</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon7} alt="Пальцеукозавр11..." />
                            <div className="card__container">
                                <h2 className="card__title">Пальцеукозавр11...</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon8} alt="Лукозвр69" />
                            <div className="card__container">
                                <h2 className="card__title">Лукозвр69</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon8} alt="Лукозвр69" />
                            <div className="card__container">
                                <h2 className="card__title">Лукозвр69</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card_type_legend">
                        <div className="card__content">
                            <img className="card__img" src={pokemon1} alt="Жестезавр" />
                            <div className="card__container">
                                <h2 className="card__title">Жестезавр
                                    <img className="card__title-img-legend" src={legend} alt="золотая монета"/>
                                </h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_pokemonbol"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__content">
                            <img className="card__img" src={pokemon2} alt="Пукапука" />
                            <div className="card__container">
                                <h2 className="card__title">Пукапука</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={true} className="card__row-img"></div>
                                        <div className="card__row-attack card__row-attack_type_4"><p>Атака 4</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={false} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card card__del">
                        <div className="card__content">
                            <img className="card__img" src={pokemon3} alt="Бульбазавр" />
                            <div className="card__container">
                                <h2 className="card__title">Бульбазавр</h2>
                                <div className="card__row-container">
                                    <div className="card__row-item1">
                                        <div hidden={false} className="card__row-img card__row-img_type_del"></div>
                                        <div className="card__row-attack card__row-attack_type_5"><p>Атака 5</p></div>
                                    </div>
                                    <div className="card__row-item2">
                                        <div className="card__row-number">1005</div>
                                        <div hidden={true} className="card__row-copy"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>   
        </section>
    )
}


export default CardList;