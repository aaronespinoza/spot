import Button from 'react-bootstrap/Button';
import "./Difficulty.css";


function Difficulty() {
  return (
    <>
      <Button className="difficulty" variant="primary" type="submit" value="1">easy</Button>{' '}
      <Button className="difficulty" variant="warning"  type="submit" value="2">challenging</Button>{' '}
      <Button className="difficulty" variant="danger" type="submit" value="3">difficult</Button>{' '}
    </>
  );
}

export default Difficulty;