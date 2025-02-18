const BlogCard = ({ id, imgUrl, title, link }) => {
  return (
    <div
      className="position-relative bg-silver rounded-4 card"
      data-aos={id === 1 ? "fade-right" : id === 2 ? "fade-down" : "fade-left"}>
      <img
        src={imgUrl}
        width={368}
        height={286}
        alt={title}
        className="h-auto w-auto"
      />
      <div className="px-3 py-3 w-75 shadow text-center d-flex flex-column justify-content-center align-items-center bg-white position-absolute top-100 start-50 translate-middle rounded-3">
        <h1 className="fs-4">{title}</h1>
        <a
          href={link}
          className="link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover mt-3 px-3 py-3">
          Read more &rarr;
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
