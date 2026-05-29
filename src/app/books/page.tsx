import styles from "../page.module.css"

export default async function Home() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const toolList = await data.json()

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                Books
                <div>List</div>
                <div>{toolList?.title}</div>
            </main>
        </div>
    )
}