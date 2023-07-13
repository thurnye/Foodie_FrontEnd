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
 * The SummarizeRecipe200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SummarizeRecipe200Response
 * @version 1.1
 */
class SummarizeRecipe200Response {
    /**
     * Constructs a new <code>SummarizeRecipe200Response</code>.
     * 
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/SummarizeRecipe200Response
     * @param id {Number} 
     * @param summary {String} 
     * @param title {String} 
     */
    constructor(id, summary, title) { 
        
        SummarizeRecipe200Response.initialize(this, id, summary, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, summary, title) { 
        obj['id'] = id;
        obj['summary'] = summary;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>SummarizeRecipe200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SummarizeRecipe200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SummarizeRecipe200Response} The populated <code>SummarizeRecipe200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SummarizeRecipe200Response();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
SummarizeRecipe200Response.prototype['id'] = undefined;

/**
 * @member {String} summary
 */
SummarizeRecipe200Response.prototype['summary'] = undefined;

/**
 * @member {String} title
 */
SummarizeRecipe200Response.prototype['title'] = undefined;






export default SummarizeRecipe200Response;

