using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using SportStore.Data;
using SportStore.Helper;
using SportStore.Repository.CategoryRepo;
using SportStore.Repository.ProductRepo;
using SportStore.Repository.StaffPositionRepo;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.Configure<FormOptions>(options =>
{
    options.MultipartBodyLengthLimit = 5000000; // Maximum 5MB
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Connect with database
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException();
builder.Services.AddDbContext<DataContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddAutoMapper(typeof(AppHelper).Assembly);
builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IPositionRepository, PositionRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Configure CORS to allow access API to Front-End (ReactJS)
app.UseCors(builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
});


app.UseHttpsRedirection();
app.UseStaticFiles();
//app.UseEndpoints(endpoints =>
//{
//    endpoints.MapControllers();
//});

app.UseAuthorization();
app.MapControllers();
app.Run();
