function List(props) {
    return (
      <div className="list-item">
        <img src={props.link} alt="this is me" className="list-img" />
        <div>
          <h3>{props.name}</h3>
          <p>{props.age}</p>
        </div>
        
      </div>
    );
  }
  
  export default List;