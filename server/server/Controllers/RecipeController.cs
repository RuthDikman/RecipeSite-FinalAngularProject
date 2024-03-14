using Microsoft.AspNetCore.Mvc;
using server.Entities;
using System.ComponentModel;
using System.Text.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        public static List<Recipe> recipeList = new List<Recipe>(){};
        // GET: api/<Reacipe>
        [HttpGet]
        public List<Recipe> Get()
        {
            return recipeList;
        }
        // GET api/<Reacipe>/5
        [HttpGet("{name}")]
        public Recipe Get(string name)
        {
            return recipeList.FirstOrDefault(u => u.Name == name);
        }

        // POST api/<Reacipe>
        [HttpPost]
        public ActionResult Post([FromBody] Recipe value)
        {
            Recipe recipe = new Recipe(value);
            recipeList.Add(recipe);
            return Ok();
        }

        // PUT api/<Reacipe>/5
        [HttpPut("{id}")]
        public Recipe Put(int id, [FromBody] Recipe value)
        {
            Recipe r = recipeList.FirstOrDefault(u => u.Id == id);
            if (r != null)
            {
                r.Id = value.Id;
                r.Name = value.Name;
                r.CategoryId = value.CategoryId;
                r.PreparationTimeInMinutes = value.PreparationTimeInMinutes;
                r.DifficultyLevel = value.DifficultyLevel;
                r.DateAdded = value.DateAdded;
                r.UserID = value.UserID;
                r.Image = value.Image;
                r.PreparationMethod = value.PreparationMethod;
                r.Ingredients = value.Ingredients;
            }
            return r;
        }

        // DELETE api/<Reacipe>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
