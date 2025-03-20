
import axios from "axios";
import { Layout } from "../components/Layout";
import { Button } from "../components/ui/button";
const Index = () => {
  const your_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNDc3MTYyLCJpYXQiOjE3NDI0NzY4NjIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUxNDNiYmUyLTMxODEtNDlmOS05NTlhLWU2ZjhjNWJlYWExZCIsInN1YiI6InJwMjkyOUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoicmVudWdhbWFydCIsImNsaWVudElEIjoiZTE0M2JiZTItMzE4MS00OWY5LTk1OWEtZTZmOGM1YmVhYTFkIiwiY2xpZW50U2VjcmV0Ijoid3VaS2R1Y2FsWUJib0l0dCIsIm93bmVyTmFtZSI6IlJha2VzaCBQIiwib3duZXJFbWFpbCI6InJwMjkyOUBzcm1pc3QuZWR1LmluIiwicm9sbE5vIjoiUkEyMjExMDI2MDUwMDg5In0.uW9lV-lGrXmYgRJjNZzyCNNaaDvn28PBQpmSAOgFedk"
  const fetchData = () => {
    axios.get("http://20.244.56.144/test/users", {
      headers: {
        Authorization: `Bearer ${your_token}`
      }
    })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
  }
  return (
    <Layout>
        <div className="text-3xl justify-center flex items-center ">
            <h1>Home Page</h1>
          
        </div>
        <Button onClick={fetchData}>
          Ftech data 
        </Button>
    </Layout>
  )
}

export default Index