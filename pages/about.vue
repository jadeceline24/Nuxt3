<template>
    <div>
        <h2>About
            
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veritatis pariatur aliquam eaque assumenda explicabo magni. Natus ex corporis minus officia fugit quisquam beatae iusto consequuntur libero, dolorum quia consectetur!</p>
    </div>
    {{data}}
</template>

<script setup>
    // const {data} = await useFetch('/api/merch?name=mario', {method: 'POST', body: {age: 30}})

    // const {data} = await useFetch('/api/merch')
    const {data} = await useFetch('/api/currency/GBP')
</script>

<style scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>