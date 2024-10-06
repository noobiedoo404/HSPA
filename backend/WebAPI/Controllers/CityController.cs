using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly DataContext dc;

        public CityController(DataContext dc)
        {
            this.dc = dc;
        }

        [HttpGet]
        public async Task<IActionResult> GetCity ()
        {
            //var cities = this.dc.Cities.ToListAsync();
            //return Ok(cities);

            // as 'this.dc.Cities.ToListAsync() is asynchronous, it takes time to give response, so we have to wait.
            // return Ok(this.dc.Cities.ToListAsync()); will give 500 error
            return Ok(await dc.Cities.ToListAsync());
        }

        [HttpPost("AddCity")]
        public async Task<IActionResult> AddCity(string cityName)
        {
            City city = new City();
            city.Name = cityName;
            await dc.Cities.AddAsync(city);
            await dc.SaveChangesAsync();
            return Ok(city);
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            var city = await dc.Cities.FindAsync(id);
            dc.Cities.Remove(city);
            await dc.SaveChangesAsync();
            return Ok(id);
        }
    }
}
