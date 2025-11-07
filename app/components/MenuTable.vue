<template>
  <div class="container mx-auto p-6 bg-white bg-opacity-90 rounded-lg">
    <h1
      class="text-4xl font-bold text-center text-primary-600 dark:text-primary-400 mb-8"
    >
      🎂 Our dessert menu
    </h1>

    <!-- Cakes Section -->
    <section class="mb-12">
      <h2
        class="text-3xl font-semibold text-primary-500 dark:text-primary-400 mb-4"
      >
        🍰 Custom Cakes
      </h2>
      <p class="text-gray-800 mb-4">
        Price based on design, size, cream type, and filling. Contact us for
        custom designs!
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-primary-500 dark:text-primary-400">
            🥮 Cake Flavors
          </h3>
          <ul class="list-none pl-5 text-gray-800">
            <li>🍦 Vanilla</li>
            <li>🌿 Pandan</li>
            <li>🍫 Chocolate</li>
          </ul>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-primary-500 dark:text-primary-400">
            🧈 Cream Options
          </h3>
          <p class="text-gray-800">*Buttercream or Fresh Cream</p>
          <ul class="list-none pl-5 text-gray-800">
            <li>🍦 Vanilla</li>
            <li>🍪 Oreo</li>
            <li>🍵 Matcha</li>
            <li>🍓 Strawberry</li>
            <li>☕ Espresso</li>
            <li>🍪 Cookie</li>
          </ul>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-primary-500 dark:text-primary-400">
            🥧 Fillings
          </h3>
          <ul class="list-none pl-5 text-gray-800">
            <li>🥭 Durian</li>
            <li>🍓 Fresh Strawberries/🥭 Mango</li>
            <li>🍒 Fruit Yogurt (Strawberries, Blueberries, Peach)</li>
            <li>🍫 Chocolate</li>
            <li>🍍 Pineapple Jam</li>
            <li>🍵 Matcha Strawberry</li>
            <li>🍮 Custards</li>
            <li>🥥 Pandan Coconut</li>
            <li>🍠 Taro</li>
            <li>🍪 Oreo</li>
          </ul>
        </div>
      </div>
      <p class="mt-4 text-gray-800">
        🎨 Decorations: Handmade from fondant, Japanese clay, rice paper, or
        marshmallow. Cake toppers available.
      </p>
    </section>

    <!-- Sweet Table Section -->
    <section class="mb-12">
      <h2
        class="text-3xl font-semibold text-primary-500 dark:text-primary-400 mb-4"
      >
        🍬 Sweet Table
      </h2>

      <!-- Macarons -->
      <div class="bg-white p-4 rounded-lg shadow-md mb-6 donderdag">
        <h3 class="text-xl font-bold text-primary-500 dark:text-primary-400">
          🥐 Macarons - $30/dozen
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-800">
          <ul class="list-none pl-5">
            <li>🍫 Chocolate</li>
            <li>🥥 Coconut</li>
            <li>🥭 Durian</li>
            <li>🍠 Taro</li>
            <li>🍍 Pineapple</li>
            <li>🍓 Strawberry</li>
          </ul>
          <ul class="list-none pl-5">
            <li>🍵 Matcha</li>
            <li>🍓 Strawberry Yogurt</li>
            <li>🥭 Passion Fruit</li>
            <li>🍮 Salted Caramel</li>
            <li>🔥 Crème Brûlée</li>
            <li>🍫 Chocolate Mint</li>
          </ul>
          <ul class="list-none pl-5">
            <li>🎂 Birthday Cake</li>
            <li>🍪 Oreo</li>
            <li>🫐 Blueberry</li>
            <li>🍪 Cookie and Cream</li>
            <li>🥜 Pistachio</li>
            <li>🍉 Watermelon</li>
          </ul>
          <ul class="list-none pl-5">
            <li>☕ Tiramisu</li>
            <li>🧋 Black Milk Tea</li>
            <li>🍦 Vanilla</li>
            <li>☕ Espresso</li>
            <li>🌰 Hazelnut</li>
          </ul>
        </div>
      </div>

      <!-- Shooters -->
      <div class="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 class="text-xl font-bold text-primary-500 dark:text-primary-400">
          🥃 Shooters - $3/shooter
        </h3>
        <p class="text-gray-800">
          Cheesecake/Mousse or Panna Cotta Fruit Flavor
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-800">
          <ul class="list-none pl-5">
            <li>🥭 Durian</li>
            <li>🥭 Passion Fruit</li>
            <li>🍓 Strawberry</li>
            <li>🍵 Matcha Strawberry</li>
          </ul>
          <ul class="list-none pl-5">
            <li>🫐 Blueberry</li>
            <li>🧋 Milk Tea</li>
            <li>🍫 Chocolate Lover</li>
            <li>🍮 Caramel</li>
          </ul>
          <ul class="list-none pl-5">
            <li>🍪 Oreo</li>
            <li>🍑 Peach</li>
            <li>🍓 Strawberry Chocolate</li>
            <li>🌸 Sakura</li>
            <li>🥥 Coconut Pandan Leaf</li>
          </ul>
        </div>
      </div>

      <!-- Cream Puffs -->
      <div class="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 class="text-xl font-bold text-primary-500 dark:text-primary-400">
          🥯 Decorated Cream Puffs - $32/dozen
        </h3>
        <ul class="list-none pl-5 text-gray-800">
          <li>🍦 Vanilla</li>
          <li>🍒 Fruit Flavor</li>
          <li>🍵 Matcha</li>
          <li>🍫 Chocolate</li>
        </ul>
      </div>

      <!-- Cupcakes -->
      <div class="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 class="text-xl font-bold text-primary-500 dark:text-primary-400">
          🧁 Cupcakes
        </h3>
        <ul class="list-none pl-5 text-gray-800">
          <li>🍰 Standard - $2.75/cup</li>
          <li>🍫 Chocolate - $3.25/cup</li>
        </ul>
      </div>

      <!-- Cookies -->
      <div class="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 class="text-xl font-bold text-primary-500 dark:text-primary-400">
          🍪 Cookies
        </h3>
        <ul class="list-none pl-5 text-gray-800">
          <li>
            🍫 Standard Cookies - $2.25/cookie (Chocolate Chip, Oatmeal Raisin,
            Peanut Butter, Molasses, Sugar Cookie, Lemon Zest)
          </li>
          <li>🥠 Sand Cookies - $3.25/cookie</li>
          <li>🎨 Custom Icing Cookies - $35/dozen</li>
          <li>🍍 Fresh Pineapple Cookies with Edible Flowers - $3/cookie</li>
        </ul>
      </div>

      <!-- Tarts -->
      <div class="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 class="text-xl font-bold text-primary-500 dark:text-primary-400">
          🥧 Fruit Tarts
        </h3>
        <ul class="list-none pl-5 text-gray-800">
          <li>🥧 Mini Fruit Tart - $30/dozen</li>
          <li>🥧 Regular Fruit Tart - $40/dozen</li>
        </ul>
      </div>

      <!-- Cheesecake Bites -->
      <div class="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 class="text-xl font-bold text-primary-500 dark:text-primary-400">
          🍰 Cheesecake Bites - $4/piece
        </h3>
      </div>

      <!-- Bông Lan Trứng Muối -->
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="text-xl font-bold text-primary-500 dark:text-primary-400">
          🥮 Bông Lan Trứng Muối
        </h3>
        <ul class="list-none pl-5 text-gray-800">
          <li>🧁 Cupcake - $4</li>
          <li>🍰 14cm, 1 layer - $12</li>
          <li>🍰 14cm, 2 layers - $19</li>
          <li>🍰 18cm, 2 layers - $35</li>
          <li>🍰 20cm, 2 layers - $45</li>
          <li>🎉 Party Tray, 2 layers - $65</li>
        </ul>
        <p class="text-gray-800 mt-2">
          🎨 Custom designs, shapes, and sizes available. Price based on design.
        </p>
      </div>
    </section>
  </div>
</template>
