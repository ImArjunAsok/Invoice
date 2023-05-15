using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InvoiceTrack.Infrastructure.Migrations
{
    public partial class NewPull2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[] { "2", "4" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp", "UserName" },
                values: new object[] { "31c5e48a-00db-4ff2-942f-62cee6594c2b", "AQAAAAEAACcQAAAAELixuphJtTtZkFv6qb4iXDd1q9234njyVGbdp7FFICmJ7lJouxTeM0QbtnE2Iz/0Lw==", "65ea4b2b-56b7-4662-8e96-a6f7a9bd9ad4", "a585655e-b3cd-497c-a82f-916c4dc83c58" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "UserName" },
                values: new object[] { "3414ca90-acc5-433b-8738-35944dc47a53", "bcc25719-805f-4731-b573-1a201d46ddb1", "b9d96c8c-0ac5-4709-a3ea-32e910bced2d" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "UserName" },
                values: new object[] { "ede974e2-2e6e-4683-9676-8a725d335ded", "a79f501e-cb1d-4f94-b1e5-0b89c832cc73", "c7a8e8f6-8fb8-4fcc-9041-cc52b312c269" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "4",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "UserName" },
                values: new object[] { "b061b192-c2b6-4410-b448-8dacd55b7874", "24e1c89b-2168-4079-a3a9-f6d04206d49d", "90edd32e-fd38-4d1a-8316-623df3b54238" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "2", "4" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp", "UserName" },
                values: new object[] { "c5ad788b-b707-4534-9b64-4f4adc6c8525", "AQAAAAEAACcQAAAAELnBSNFouoYcJgHT+Tw16VrabGjxI+8srmhyBq4zl83c3qCbWiI6n97WeWZLHoW9ng==", "514d46d6-161b-4039-9c59-1d528d5e53fb", "42a8c9f9-dbf9-4ba7-ae19-53cc9985534d" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "UserName" },
                values: new object[] { "48c8e1c2-2536-4f1e-85c5-34c3798b58f2", "6f07acd8-aced-4b65-9535-cf5d134cf9ea", "c9ddef15-c813-4d5f-b358-fd5f5607cd97" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "UserName" },
                values: new object[] { "eaaeeff4-2438-4e01-8c8e-4c9a60b116c6", "1da924c9-ac91-45d5-8945-86ea348475cc", "25c0791f-ef07-448f-8668-cf1d849649d7" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "4",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "UserName" },
                values: new object[] { "ab242801-7f8c-4d69-ae05-53bf1a5c6435", "f9623087-6321-42c7-970b-f1c8c89d53be", "78665501-ed58-4562-ac7e-596ba5e9b2b1" });
        }
    }
}
