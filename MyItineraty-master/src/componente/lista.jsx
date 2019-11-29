import react from 'React'

class Listado extends React.Component {
    render() {
    //   return <h1>Hello, {this.props.name}</h1>;
    
    <div>
      const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
    </div>
    return (doubled)
    }
    render() {
        const members = this.state.members.map((member, i) => {
          return (
            <React.Fragment key={member.signature}>
              <Row>
                <Col lg="12">
                  <Card body outline color="primary" className="cartas container">
                    <CardTitle tag="h3">{member.fullname}</CardTitle>
                    <CardImg src={member.signature} alt="signature" />
                  </Card>
                </Col>
              </Row>
            </React.Fragment>
          );
        });
    
        return (
          <div className="App">
            <header>
              <Navbar color="dark" dark>
                <a href="#" className="text-white">
                  MYtinerary Project Team
                </a>
              </Navbar>
            </header>
            <main className="information">
              <Toggle>{members}</Toggle>
            </main>
          </div>
        );
      }


  }
  export default Listado;
