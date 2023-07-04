import { useSearchParams } from "react-router-dom"
import { useFetch, useTitle } from "../hooks"
import { Card } from "../components/Card"

export const Search = ({ apiPath }) => {

    const [searchParams] = useSearchParams()
    const queyTerm = searchParams.get('q')

    const { data: movies } = useFetch(apiPath, queyTerm)

    useTitle(`Search Result for ${queyTerm}`)


    return (
        <main>
            <section className="py-7">
                <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0 ? `No results found for '${queyTerm}'` : `Result for '${queyTerm}'`}</p>
            </section>
            <section className="py-7">
                <div className="flex justify-start flex-wrap ">
                    {movies.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </main>
    )
}
