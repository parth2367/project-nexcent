import Container from "react-bootstrap/Container";

const ManageCard = ({ id, imgUrl, title }) => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center gap-3 py-2 px-6">
      <img src={imgUrl} width={65} height={65} alt={title} />
      <div className="d-flex flex-column text-center gap-1">
        <h1 className="fs-1 fw-bold text-gray-900">{title}</h1>
        <p className="fs-6 fw-light text-gray-200">
          Our membership management software provides full automation of
          membership renewals and payments.
        </p>
      </div>
    </Container>
  );
};

export default ManageCard;
