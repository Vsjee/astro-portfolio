import type { ProyectInfo } from '../models/proyectsData.model';
import './proyectCard.css';

interface Props {
    card: ProyectInfo;
}

function ProyectCard({ card }: Props) {
    console.log(card);

    return (
        <article className='card'>
            <div className='card__picture'>
                <picture>
                    <img
                        src={card.image}
                        alt={card.title}
                        className='card__prev'
                        loading='lazy'
                    />
                </picture>
            </div>
            <div className='card__info'>
                <h1>{card.title}</h1>
                <ul>
                    {card.techStack.map((item, i) => {
                        return i + 1 !== card.techStack.length ? (
                            <li key={i}>{item},</li>
                        ) : (
                            <li key={i}>{item}.</li>
                        );
                    })}
                </ul>
                <div className='card__info__btnContainer'>
                    {card.linkProyect !== '' ? (
                        <a href={card.linkProyect} target='_blank'>
                            <button className='btnLinks'>
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAY9JREFUOE+NlIFRIlEQRF9HIEagGRwZyEVwGIEQgRiBGIFcBHARCBGcRiBGIBmIEbQ1u7Pw192jbqt2a+v/Pz090z1fHB4hjI8LIMDVp1zt+Y/YU8//YGR8F6jD4oA2AS4Ee4s/WPuqgjzfAjpilFQ0AC+BcSTPnS1oCt42BdVArbjvLdEY/IS4wywEI4s11jv4J7CvIDoYuVBWKLg07CJjCjIBLYXvLBZRXw3UHzyxuIpegF+oWBzID4APwYPF/AjUrm8AegKPgM8MPQNWwDQTzzH3wDWwrpkWPgJHpr/AUDC1WCWLmcUQE8rFuwRthMdlNSXU2vArMieDYPEK/M5DM+AReANGaYXKr6X8mYkH0DzdHEA3jTKggfCLxRjXajWKl0AL4BZxHocKNcM/owzYClZ9Y1T2aCb86GNZzaxdgnenvdb4qE4fjX5GXOBKjWeg6UmqU85xOeTdoR1SKaUfxcRvUqm6J98nIRdahiwugvBQMNwB0Ze2aUu8wszti+Tk1fGvza4he2+nfkZt0C9eU6McgYEuBgAAAABJRU5ErkJggg==' />
                            </button>
                        </a>
                    ) : null}
                    <a href={card.github} target='_blank'>
                        <button className='btnLinks'>
                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAbhJREFUOE91lI1VwkAQhL+pQKxAOxArEDuACsQKlAqIFYgVKBVAB2oFpgOhAkMF69vLJncSvPeS3F92dmbnTngTYOkV/XJKCOuX8/7U+7O/H8RS9xkhbjCNA6DG9CmsaTEDIKL51HHoEaZnYXM7ihzDN2ABahLAMFBKbGywAS7LGJl50IcdaAZWd7KokGcEfCEuMa2FTU2cHYlzELY1uAPtwK6BxlNoqbVAK+ABOAAe1J9xZNYgnHKdNIIauBKsTcxbvdrmP/1E/wAapUqd0CjIObWL0Ojc9eqoTTC9R3WeMKpBEcqSiApjGUFnwLbLqAItwy+3GB+9rIl/l13vqQQc809A1WmUEcQi9CpKmw0ZAFPQZhgIpsAmNm0BT/dkoMJLd1GoGaaemou9A87CFxXYS1vagaMegecC5xyjKZ29ArtBuNjuXi/avQsZPzmdVzAH7TyzBuZpdGTID+AbtIgjsuqPghhj+soHW3sw91lhyIzgC2+gb2G1gSM6ZW8TiEqJPZZ0zUdkoEDrYNfIU5745iiCg3jGTtvt0uTrRUEtZ9RfRP85+4TZk16tRqVrI2iJNthx4iL8BSAYyR436JAqAAAAAElFTkSuQmCC' />
                        </button>
                    </a>
                </div>
            </div>
        </article>
    );
}
export default ProyectCard;
