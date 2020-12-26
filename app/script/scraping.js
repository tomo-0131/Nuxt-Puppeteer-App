const puppeteer = require('puppeteer');
const express = require('express');

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
    headless: false,
    slowMo: 50,
  });

  const page = await browser.newPage();


  await page.goto('https://www.farfetch.com/jp/shopping/men/sacai--item-15466999.aspx?storeid=9359');

  let farfetchBrandName = "#bannerComponents-Container > h1 > span._0ab287 > a > span";
  let farfetchItemName = "#bannerComponents-Container > h1 > span._d85b45._3c73f1._d85b45";
  let farfetchItemPrice = "#slice-pdp > div > div._53a765 > div._d47db0 > div._3eed2e > div._7dad7e > div > span";
  let farfetchItemMaterial = "#panelInner-0 > div > div:nth-child(2) > div > div:nth-child(1) > p";
  let farfetchItemBrandStyleId = "#panelInner-0 > div > div:nth-child(2) > div > div:nth-child(3) > p > span";

  const brandName = await page.$eval(farfetchBrandName, item => {
    return item.textContent;
  });

  const itemName = await page.$eval(farfetchItemName, item => {
    return item.textContent;
  });

  const price = await page.$eval(farfetchItemPrice, item => {
    return item.textContent;
  });

  const material = await page.$eval(farfetchItemMaterial, item => {
    return item.textContent;
  });

  const brandStyleId = await page.$eval(farfetchItemBrandStyleId, item => {
    return item.textContent;
  });

  console.log(brandName);
  console.log(itemName);
  console.log(price);
  console.log(material);
  console.log(brandStyleId);

  await browser.close();

})();
