using System.ComponentModel.DataAnnotations;

namespace crud.Models
{
    public class User 
    {
        public int Id {get; set;}  
        
        [Required]
        public string? Name {get; set;}  
        
        [Required]
        public string? Email {get; set;} 
        
        [Required]
        public int CEP {get; set;} 

        public string? PublicPlace {get; set;}

        public string? Neighborhood {get; set;}

        public string? Uf {get; set;}
    }   
}