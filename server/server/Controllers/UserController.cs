using Microsoft.AspNetCore.Mvc;
using server.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> userList = new List<User>() {};
        // GET: api/<users>
        [HttpGet]
        public List<User> Get()
        {
            return userList;
        }

        // GET api/<users>/5
        [HttpGet("{name}")]
        public User Get(string name)
        {
            return userList.FirstOrDefault(u=>u.Name==name);
        }

        // POST api/<users>
        [HttpPost]
        public ActionResult Post([FromBody] User value)
        {
            User user = new User(value);
            userList.Add(user);
            return Ok();
        }

        // PUT api/<users>/5
        [HttpPut("{name}")]
        public void Put(string name, [FromBody] string value)
        {
        }

        // DELETE api/<users>/5
        [HttpDelete("{name}")]
        public void Delete(string name)
        {
        }
    }
}
