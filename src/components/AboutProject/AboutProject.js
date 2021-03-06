import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project' id="project">
      <h2 className='project__title'>О проекте</h2>

      <div className='project__table'>
        <div className='project__table-block'>
          <h3 className='project__table-title'>Дипломный проект включал 5 этапов</h3>
          <p className='project__table-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='project__table-block'>
          <h3 className='project__table-title'>На выполнение диплома ушло 5 недель</h3>
          <p  className='project__table-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>

      <div className='project__timeline'>
        <div className='project__line project__line_part_backend'>
          <p className='project__line-text'>1 неделя</p>
        </div>
        <div className='project__line project__line_part_frontend'>
          <p className='project__line-text project__line-text_part_frontend'>4 недели</p>
        </div>
        <p className='project__line-text project__line-text_part_underline'>Back-end</p>
        <p className='project__line-text project__line-text_part_underline'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
