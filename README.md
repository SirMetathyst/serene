# Serene

[Serene](http://serene-css.infinityfreeapp.com/) is a skeleton-css inspired, tailwind kickstarter. Open the [Demo](http://serene-css.infinityfreeapp.com/)

## Is Serene for you? 

You should use Serene if you're embarking on a smaller project and want to use tailwind. Serene is designed to mimick the style of skeleton. A minimal and lightweight css library. Serene is not a "library" per se but a template or kickstarter for tailwind in the style of skeleton. It takes a similar approach to tailwind ui and flowbite but Serene only styles a handful of standard HTML elements. For an example on how to put together a simple serene webpage, please refer to the source code of this page. Icons on this page are all inline svg and come from hero icons. 

## Colors

Serene uses the standard tailwind colors and provides a minimal set (for base, primary, success, infomation, warning, and error) here for reference but you can also find them on the tailwind documentation website. 

## Typography

Type is all set with tailwind classes. Serene doesn't implement custom classes or apply styles to the elements themselves. Like tailwind ui and other tailwind based component/template/kickstart libraries you just copy-paste the markup. Dark and high contrast modes are part of the style. The typography base is Inter served by rsme, set at text-base (1rem / 16px) over a 1.5rem line height (24px). Other type basics like anchors, strong, emphasis, and underline are all included. 

```html
<h1 class="block text-4xl font-semibold text-gray-700 dark:text-gray-300 contrast-more:text-black">Heading 1</h1>
<h2 class="block text-3xl font-semibold text-gray-700 dark:text-gray-300 contrast-more:text-black">Heading 2</h2>
<h3 class="block text-2xl font-semibold text-gray-700 dark:text-gray-300 contrast-more:text-black">Heading 3</h3>
<h4 class="block text-xl font-semibold text-gray-700 dark:text-gray-300 contrast-more:text-black">Heading 4</h4>
<h5 class="block text-lg font-semibold text-gray-700 dark:text-gray-300 contrast-more:text-black">Heading 5</h5>
<h6 class="block text-base font-semibold text-gray-700 dark:text-gray-300 contrast-more:text-black">Heading 6</h6>

<p class="block text-base text-gray-700 contrast-more:text-black dark:text-gray-300 ">Paragraph</p>

<a class="text-blue-500 underline cursor-pointer hover:text-blue-700">Colored</a>
<strong>Bolded</strong>
<em>Italicized</em>
<u>Underlined</u>
```

 If you want to use the Inter font in your project then you will need to include the following line to your tailwind configuration file, the css link to your page and the font-inter class to the element where you want to use the font. For convenience you can just apply it to the body tag to effect everything. 

 ```js
 module.exports = {
...
theme: {
  extend: {          
    fontFamily: {        
      // INCLUDE ON YOUR PAGE: <link rel="stylesheet" href="https://rsms.me/inter/inter.css"> 
      'inter': ["'Inter var'", ...defaultTheme.fontFamily.sans],        
      },
    },
  },
...
}
```

## Grids 

Grids are automatically generated as utility classes by tailwind but Serene provides two grid configurations for your convenience. Just go ahead and copy-paste it into your project. 

```html
<div class="grid gap-2 md:grid-cols-12">
                        
  <!-- ROW: 1-11 -->
  <div class="col-span-12 md:col-span-1">
    One
  </div>
  <div class="col-span-12 md:col-span-11">
    Eleven
  </div>
  
  <!-- ROW: 2-10 -->
  <div class="col-span-12 md:col-span-2">
    Two
  </div>
  <div class="col-span-12 md:col-span-10">
    Ten
  </div>
  
  <!-- ROW: 3-9 -->
  <div class="col-span-12 md:col-span-3">
    Three
  </div>      
  <div class="col-span-12 md:col-span-9">
    Nine
  </div>
  
  <!-- ROW: 4-8 -->
  <div class="col-span-12 md:col-span-4">
    Four
  </div>
  <div class="col-span-12 md:col-span-8">
    Eight
  </div>
  
  <!-- ROW: 5-7 -->
  <div class="col-span-12 md:col-span-5">
    Five
  </div>
  <div class="col-span-12 md:col-span-7">
    Seven
  </div>
  
  <!-- ROW: 6-6 -->
  <div class="col-span-12 md:col-span-6">
    Six
  </div>      
  <div class="col-span-12 md:col-span-6">
    Six
  </div>
  
  <!-- ROW: 7-5 -->
  <div class="col-span-12 md:col-span-7">
    Seven
  </div>
  <div class="col-span-12 md:col-span-5">
    Five
  </div>
  
  <!-- ROW: 8-4 -->
  <div class="col-span-12 md:col-span-8">
    Eight
  </div>       
  <div class="col-span-12 md:col-span-4">
    Four
  </div>
  
  <!-- ROW: 9-3 -->
  <div class="col-span-12 md:col-span-9">
    Nine
  </div>
  <div class="col-span-12 md:col-span-3">
    Three
  </div>
  
  <!-- ROW: 10-2 -->
  <div class="col-span-12 md:col-span-10">
    Ten
  </div>       
  <div class="col-span-12 md:col-span-2">
    Two
  </div>     

  <!-- ROW: 11-1 -->
  <div class="col-span-12 md:col-span-11">
    Eleven
  </div>
  <div class="col-span-12 md:col-span-1">
    One
  </div>
</div>
```

```html
<!-- AUTO GRID -->
<div class="grid grid-flow-row gap-2 mt-2 md:grid-flow-col auto-rows-max">
  <!-- COL: -->
  <div>
  </div>
  <!-- COL: -->
  <div>
  </div>
  <!-- COL: -->
  <div>
  </div>
  <!-- ... -->
</div>
```

## Buttons 

Buttons come in two basic flavors in Serene. The standard button element is plain, whereas the primary button is vibrant and prominent. Button styles are provided for a number of appropriate form elements. Dark and high contrast modes are part of the style. 

```html
<!-- STANDARD BUTTONS -->
<a href="#" class="inline-flex items-center px-8 py-2 text-base text-gray-700 bg-white border border-gray-200 rounded cursor-pointer dark:border-gray-700 dark:bg-black dark:text-gray-300 contrast-more:border-black contrast-more:text-black hover:border-gray-400 dark:hover:border-gray-500 contrast-more:hover:border-black focus:outline-none">Anchor Button</a>
<button type="button" class="inline-flex items-center px-8 py-2 text-base text-gray-700 bg-white border border-gray-200 rounded cursor-pointer dark:border-gray-700 dark:bg-black dark:text-gray-300 contrast-more:border-black contrast-more:text-black hover:border-gray-400 dark:hover:border-gray-500 contrast-more:hover:border-black focus:outline-none">Button Element</button>
<input type="submit" value="Submit Input" class="inline-flex items-center px-8 py-2 text-base text-gray-700 bg-white border border-gray-200 rounded cursor-pointer dark:border-gray-700 dark:bg-black dark:text-gray-300 contrast-more:border-black contrast-more:text-black hover:border-gray-400 dark:hover:border-gray-500 contrast-more:hover:border-black focus:outline-none">
<input type="button" value="Button Input" class="inline-flex items-center px-8 py-2 text-base text-gray-700 bg-white border border-gray-200 rounded cursor-pointer dark:border-gray-700 dark:bg-black dark:text-gray-300 contrast-more:border-black contrast-more:text-black hover:border-gray-400 dark:hover:border-gray-500 contrast-more:hover:border-black focus:outline-none">

<!-- PRIMARY BUTTONS -->
<a class="inline-flex items-center px-8 py-2 text-base text-white bg-purple-600 border border-purple-600 rounded cursor-pointer dark:bg-purple-400 dark:hover:bg-purple-500 hover:bg-purple-700 contrast-more:hover:bg-purple-900 contrast-more:hover:border-purple-900 hover:border-purple-700 focus:outline-none">Anchor Button</a>
<button type="button" class="inline-flex items-center px-8 py-2 text-base text-white bg-purple-600 border border-purple-600 rounded cursor-pointer dark:bg-purple-400 dark:hover:bg-purple-500 hover:bg-purple-700 contrast-more:hover:bg-purple-900 contrast-more:hover:border-purple-900 hover:border-purple-700 focus:outline-none">Button Element</button>
<input type="submit" value="Submit Input" class="inline-flex items-center px-8 py-2 text-base text-white bg-purple-600 border border-purple-600 rounded cursor-pointer dark:bg-purple-400 dark:hover:bg-purple-500 hover:bg-purple-700 contrast-more:hover:bg-purple-900 contrast-more:hover:border-purple-900 hover:border-purple-700 focus:outline-none">
<input type="button" value="Button Input" class="inline-flex items-center px-8 py-2 text-base text-white bg-purple-600 border border-purple-600 rounded cursor-pointer dark:bg-purple-400 dark:hover:bg-purple-500 hover:bg-purple-700 contrast-more:hover:bg-purple-900 contrast-more:hover:border-purple-900 hover:border-purple-700 focus:outline-none">
```

## Forms 

All inputs, select, and buttons are normalized using the forms tailwind plugin for a common height cross-browser so inputs can be stacked or placed alongside each other. Dark and high contrast modes are part of the style. 

```html
<form action="#form">
  <div class="grid grid-flow-row gap-4 mt-8 lg:gap-8 lg:grid-flow-col auto-rows-max">
    <div class="flex flex-col">
      <label for="exampleEmailInput" class="block text-base text-gray-700 contrast-more:text-black">Your
        email</label>
      <input class="block w-full text-gray-700 border-gray-300 rounded dark:focus:border-purple-400 dark:border-gray-600 dark:bg-black dark:text-gray-300 contrast-more:text-black contrast-more:border-black contrast-more:hover:border-black dark:hover:border-gray-500 hover:border-gray-400 focus:border-purple-500 focus:ring-0 contrast-more:focus:hover:border-purple-500 sm:text-sm" type="email" id="exampleEmailInput">
    </div>
    <div class="flex flex-col">
      <label for="exampleRecipientInput" class="block text-base text-gray-700 contrast-more:text-black">Reason
        for contacting</label>
      <select class="block w-full text-gray-700 border-gray-300 rounded dark:focus:border-purple-400 dark:border-gray-600 dark:bg-black dark:text-gray-300 contrast-more:text-black contrast-more:border-black contrast-more:hover:border-black dark:hover:border-gray-500 hover:border-gray-400 focus:border-purple-500 focus:ring-0 contrast-more:focus:hover:border-purple-500 sm:text-sm" id="exampleRecipientInput">
        <option value="Option 1">Questions</option>
        <option value="Option 2">Admiration</option>
        <option value="Option 3">Can I get your number?</option>
      </select>
    </div>
  </div>
  <div class="flex flex-col mt-4">
    <label for="exampleMessage" class="block text-base text-gray-700 contrast-more:text-black">Message</label>
    <textarea class="block w-full text-gray-700 border-gray-300 rounded dark:focus:border-purple-400 dark:border-gray-600 dark:bg-black dark:text-gray-300 contrast-more:text-black contrast-more:border-black contrast-more:hover:border-black dark:hover:border-gray-500 hover:border-gray-400 focus:border-purple-500 focus:ring-0 contrast-more:focus:hover:border-purple-500 sm:text-sm" id="exampleMessage"></textarea>
  </div>
  <div class="flex justify-between mt-4">
    <input type="submit" value="Submit" class="inline-flex items-center px-8 py-2 text-base text-white bg-purple-600 border border-purple-600 rounded cursor-pointer dark:bg-purple-400 dark:hover:bg-purple-500 hover:bg-purple-700 contrast-more:hover:bg-purple-900 contrast-more:hover:border-purple-900 hover:border-purple-700 focus:outline-none">      
    <label class="example-send-yourself-copy">
      <input type="checkbox" class="w-4 h-4 text-purple-600 border-gray-300 rounded dark:text-purple-400 dark:bg-black dark:ring-offset-black dark:checked:bg-purple-400 focus:ring-purple-600 dark:focus:ring-purple-400 sm:text-sm">
      <span class="ml-2 text-base text-gray-700 contrast-more:text-black">Send a copy to yourself</span>
    </label>
  </div>
</form>
```

Remember to install the forms tailwind plugin and add it to your tailwind configuration file. 

```js
module.exports = {
  ...
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

## Lists

```html
<!-- UNORDERED LIST -->
<ul class="list-disc list-inside">
  <li class="text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">Lorem dolor sit amet.</li>
  <li class="block text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">
    Lorem amet dolor sit ipsum.
    <ul class="pl-8 list-disc list-inside">
      <li class="text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">Ipsum sit amet lorem.</li>
      <li class="text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">amet sit dolor.</li>
    </ul>
  </li>
  <li class="text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">Ipsum sit lorem.</li>
</ul>

<!-- ORDERED LIST -->
<ol class="list-decimal list-inside">
  <li class="text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">Lorem dolor sit amet.</li>
  <li class="text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">
    Ipsum sit lorem.
    <ul class="pl-8 list-disc list-inside">
      <li class="text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">Lorem amet dolor sit ipsum.</li>
      <li class="text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">amet sit dolor.</li>
    </ul>
  </li>
  <li class="text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">Ipsum lorem.</li>
</ol>
```

## Code

```html
<!-- INLINE CODE -->
<code class="px-1 py-[0.5px] bg-gray-100 text-gray-700 dark:text-gray-300   dark:bg-gray-800 border border-gray-200 contrast-more:border-black rounded-sm dark:border-gray-700 contrast-more:bg-black contrast-more:text-white">dolor sit amet consectetur</code>

<!-- CODE BLOCK -->
<pre class="p-4 mt-8 overflow-auto text-gray-700 bg-gray-100 border border-gray-200 rounded dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 contrast-more:border-black contrast-more:bg-black contrast-more:text-white"><code class="block text-sm break-words whitespace-pre">.some-class {
  background-color: red;
}</code></pre>
```

## Tables

```html
<table class="w-full">
  <thead class="border-b border-gray-200dark:border-gray-700 ">
    <tr class="text-left [&>:first-child]:pl-0 [&>:last-child]:pr-0">
      <th class="px-3 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 contrast-more:text-black">Name</th>
      <th class="px-3 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 contrast-more:text-black">Age</th>
      <th class="px-3 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 contrast-more:text-black">Sex</th>
      <th class="px-3 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 contrast-more:text-black">Location</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b dark:border-gray-700 border-gray-200 [&>:first-child]:pl-0 [&>:last-child]:pr-0">
      <td class="px-3 py-3 text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">Dave Gamache</td>
      <td class="px-3 py-3 text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">26</td>
      <td class="px-3 py-3 text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">Male</td>
      <td class="px-3 py-3 text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">San Francisco</td>
    </tr>
    <tr class="border-b dark:border-gray-700 border-gray-200 [&>:first-child]:pl-0 [&>:last-child]:pr-0">
      <td class="px-3 py-3 text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">Dwayne Johnson</td>
      <td class="px-3 py-3 text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">42</td>
      <td class="px-3 py-3 text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">Male</td>
      <td class="px-3 py-3 text-base text-gray-700 dark:text-gray-300 contrast-more:text-black">Hayward</td>
    </tr>
  </tbody>
</table>
```