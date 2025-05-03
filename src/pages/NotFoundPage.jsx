import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <p>
        404 Not Found!!! Pleese follow this <Link to="/dashboard">link</Link>
      </p>
    </div>
  );
}
