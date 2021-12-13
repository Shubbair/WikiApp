import {useRouter} from "next/router";

export const getServerSideProps = async (ctx) => {
    const documentTitle = ctx.query?.id;
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${documentTitle}`)
    const json = await res.json()
    return {
       props: {
         book: json
       }
    }
 }
 

const Document = ({book}) => {
    const { router } = useRouter();

    return ( 
        <>
        <h1>HELLO</h1>
        <div>
            { book.title }
        </div>
        </>
     );
}
 
export default Document;