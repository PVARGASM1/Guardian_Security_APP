import DashboardPage from "../dashboard_user"


const ProfilePage = () => {
 

  return (
    <div> 
      <DashboardPage />

    </div>
  )
}

export default ProfilePage;

// export const getServerSideProps = async ({ params }) => {

//   const responseAPI = await fetch ('http://localhost:8080')

// }

// // export const getServerSideProps = async ({ params }) => {
  
// //   const responseAPI = await fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`)
// //   const character = await responseAPI.json()

// //   return {
// //     props: {
// //       character
// //     }
// //   }
// // }