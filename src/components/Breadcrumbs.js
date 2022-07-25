import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Breadcrumbs = (props) => {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="../">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="../catalog">
          Catalog
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{props.threads.title}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
  
  export default Breadcrumbs;