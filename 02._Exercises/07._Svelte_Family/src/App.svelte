<script>
    import Home from './components/Home/Home.svelte'
    import Parent from './components/Parent/Parent.svelte';
    const parents = ["Niels", "Ulla"]
    const children = [
        {
            name: "Niels jr.",
            familySheep: "black-sheep"
        },
        {
            name: "Oscar",
            familySheep: "grey-sheep"
        },
        {
            name: "Methea",
            isGirl: true
        }
    ]

</script>

<Home>
    <Parent parentName={[0]} myChildren={children}/>
    <Parent parentName={[1]} myChildren={children}/>
    <Parent />

</Home>

<h1>Hello</h1>