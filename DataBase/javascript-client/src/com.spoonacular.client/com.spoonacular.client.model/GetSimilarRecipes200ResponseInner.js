/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over thousands of recipes, thousands of ingredients, 800,000 food products, over 100,000 menu items, and restaurants. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.1
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetSimilarRecipes200ResponseInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetSimilarRecipes200ResponseInner
 * @version 1.1
 */
class GetSimilarRecipes200ResponseInner {
    /**
     * Constructs a new <code>GetSimilarRecipes200ResponseInner</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetSimilarRecipes200ResponseInner
     * @param id {Number} 
     * @param title {String} 
     * @param imageType {String} 
     * @param readyInMinutes {Number} 
     * @param servings {Number} 
     * @param sourceUrl {String} 
     */
    constructor(id, title, imageType, readyInMinutes, servings, sourceUrl) { 
        
        GetSimilarRecipes200ResponseInner.initialize(this, id, title, imageType, readyInMinutes, servings, sourceUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, title, imageType, readyInMinutes, servings, sourceUrl) { 
        obj['id'] = id;
        obj['title'] = title;
        obj['imageType'] = imageType;
        obj['readyInMinutes'] = readyInMinutes;
        obj['servings'] = servings;
        obj['sourceUrl'] = sourceUrl;
    }

    /**
     * Constructs a <code>GetSimilarRecipes200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetSimilarRecipes200ResponseInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetSimilarRecipes200ResponseInner} The populated <code>GetSimilarRecipes200ResponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSimilarRecipes200ResponseInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('imageType')) {
                obj['imageType'] = ApiClient.convertToType(data['imageType'], 'String');
            }
            if (data.hasOwnProperty('readyInMinutes')) {
                obj['readyInMinutes'] = ApiClient.convertToType(data['readyInMinutes'], 'Number');
            }
            if (data.hasOwnProperty('servings')) {
                obj['servings'] = ApiClient.convertToType(data['servings'], 'Number');
            }
            if (data.hasOwnProperty('sourceUrl')) {
                obj['sourceUrl'] = ApiClient.convertToType(data['sourceUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSimilarRecipes200ResponseInner.prototype['id'] = undefined;

/**
 * @member {String} title
 */
GetSimilarRecipes200ResponseInner.prototype['title'] = undefined;

/**
 * @member {String} imageType
 */
GetSimilarRecipes200ResponseInner.prototype['imageType'] = undefined;

/**
 * @member {Number} readyInMinutes
 */
GetSimilarRecipes200ResponseInner.prototype['readyInMinutes'] = undefined;

/**
 * @member {Number} servings
 */
GetSimilarRecipes200ResponseInner.prototype['servings'] = undefined;

/**
 * @member {String} sourceUrl
 */
GetSimilarRecipes200ResponseInner.prototype['sourceUrl'] = undefined;






export default GetSimilarRecipes200ResponseInner;

