<script>
    export let parentName;
    export let myChildren

    import { fridgeMessages } from "../../stores/fridgeMessageStore.js";

    import Child from "../Child/Child.svelte";

    function handleShowLove(childName) {
        console.log(`${parentName} is loved by ${childName} very much`);
    }

    /*
    assignment: Create a treasure chest full of items (emoji)
    each parent has a treasure chest and the children can take one item at a time
    remeber to follow the conventions of handle* and on*
    display the treasure chest items in the parent component
    */

    let treasureChest = ["🔱", "🏅", "⭐️", "🔑", "🏆", "👑", "🌟"];

    function handleTakeFromTreasureChest() {
        treasureChest.pop
        treasureChest = treasureChest;
    }

    function wipeFridge() {
        fridgeMessages.set([{ message: "Svelte Family Fridge" }]);
    }

</script>

<h1>{parentName}</h1>

<button on:click={wipeFridge}>Wipe the fridge</button>

<p>    
{#each treasureChest as treasure}
    {treasure + " "}
{/each}
</p>

{#each myChildren as child}
    <Child child={child} onShowLove={handleShowLove} 
        onTakeFromTreasureChest={handleTakeFromTreasureChest}
    />
{/each}
<!-- assignment pass each set of children to each parent -->