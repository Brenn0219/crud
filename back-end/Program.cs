using Microsoft.EntityFrameworkCore;
using crud.Contexts;
using crud.Services;

var builder = WebApplication.CreateBuilder(args);

// Adiciona os serviços ao contêiner.
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(opt =>
    opt.UseInMemoryDatabase("UserDatabase"));

// Adiciona o serviço UserService
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(sg => {
    sg.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Cadastro de Usuário", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(sg => {
        sg.SwaggerEndpoint("/swagger/v1/swagger.json", "Cadastro de Usuário V1");
    });
}

app.UseCors(options =>
{
    options.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
