import { useLoaderData, useParams } from 'react-router-dom';

const CareerDetails = () => {
  //id below should match what we have in path=':id' - <Route path=":id" element={<CareerDetails />} />

  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-detailds">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
      </div>
    </div>
  );
};

export default CareerDetails;

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/careers/` + id);

  return res.json();
};
