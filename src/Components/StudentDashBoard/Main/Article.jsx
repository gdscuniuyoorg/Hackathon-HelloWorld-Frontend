<<<<<<< HEAD
/* eslint-disable react/prop-types */
export default function Article({
  title,
  imgSrc,
  header,
  paragraph,
  date,
  time,
  update,
}) {
  return (
    <article>
      <p>{title}</p>
      <div>
        <header>
          {imgSrc && <img src={imgSrc} alt={title} />}
          <div>
            <h3>{header}</h3>
            <p>{paragraph}</p>
          </div>
        </header>
        <p>
          <span>{date}</span>
          <span>{time}</span>
        </p>
      </div>
      <div>
        <button>Set Reminder</button>
        {update && <button>Update</button>}
      </div>
    </article>
  );
}
=======
/* eslint-disable react/prop-types */
export default function Article({
  title,
  imgSrc,
  header,
  paragraph,
  date,
  time,
  update,
}) {
  return (
    <article>
      <p>{title}</p>
      <div>
        <header>
          {imgSrc && <img src={imgSrc} alt={title} />}
          <div>
            <h3>{header}</h3>
            <p>{paragraph}</p>
          </div>
        </header>
        <p>
          <span>{date}</span>
          <span>{time}</span>
        </p>
      </div>
      <div>
        <button>Set Reminder</button>
        {update && <button>Update</button>}
      </div>
    </article>
  );
}
>>>>>>> 608e5adedacd647d47b134a4243f5484fef60192
