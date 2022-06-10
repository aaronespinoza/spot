import Button from 'react-bootstrap/Button';

function Difficulty() {
  return (
    <>
      <Button variant="primary" type="submit" value="1">easy</Button>{' '}
      <Button variant="warning"  type="submit" value="2">challenging</Button>{' '}
      <Button variant="danger" type="submit" value="3">difficult</Button>{' '}
    </>
  );
}

export default Difficulty;